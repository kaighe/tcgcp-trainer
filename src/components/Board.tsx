import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import "./Board.css"
import * as THREE from "three"
import { CARD_GEOMETRY, CARD_MATERIALS, CardType, random_card, STAR_GEOMETRY, STAR_MATERIAL } from "../utils/cards";
// import { OrbitControls } from "three/examples/jsm/Addons.js";

interface Card extends THREE.Object3D<THREE.Object3DEventMap> {
    theta: number
    target: THREE.Vector3
    children: THREE.Mesh[]
    created_at: number
}

interface Star extends THREE.Object3D<THREE.Object3DEventMap> {
    direction: number
    size: number
    speed: number
}

export type BoardRef = {
    add_card: () => CardType | null
    reaction: (good: boolean) => void
}

function animate_card(card: Card, p: number){
    if(p > 1.5 || p < 0) return;

    let start = new THREE.Vector3(Math.sin(card.theta)*8, card.target.y + 1.5, Math.cos(card.theta)*8);

    (card.children[0].material as THREE.MeshStandardMaterial).opacity = Math.min(3*p);
    (card.children[1].material as THREE.MeshStandardMaterial).opacity = Math.min(3*p);

    let pos_lerp = 1-1/(1+Math.exp(5*(p-0.5)));
    let drop_lerp = 1-1/(1+Math.exp(20*(p-0.9)));
    let spin_lerp = 1-1/(1+Math.exp(15*(p-0.7)));
    card.position.x = start.x * (1-pos_lerp) + card.target.x * pos_lerp;
    card.position.z = start.z * (1-pos_lerp) + card.target.z * pos_lerp;
    card.position.y = start.y * (1-drop_lerp) + card.target.y * drop_lerp;

    card.setRotationFromEuler(new THREE.Euler(Math.PI + spin_lerp * Math.PI, card.theta, 0, "YXZ"));
}

function create_card(material: THREE.Material): Card{
    const card = new THREE.Object3D() as Card;

    const material_b = CARD_MATERIALS.back[0];

    const plane_f = new THREE.Mesh(CARD_GEOMETRY, material.clone());   // NOTE: SHOULD SHARE MATERIALS HERE LATER
    const plane_b = new THREE.Mesh(CARD_GEOMETRY, material_b.clone()); // instancing maybe? (would need large rewrite)
    plane_f.castShadow = true;
    plane_b.castShadow = true;
    plane_f.receiveShadow = true;
    plane_b.receiveShadow = true;
    plane_f.rotation.x = -Math.PI / 2;
    plane_b.rotation.x = -Math.PI / 2;
    plane_b.rotateY(Math.PI);

    card.add(plane_f);
    card.add(plane_b);

    card.scale.setScalar(0.5);

    card.theta = Math.random() * Math.PI * 2;

    return card;
}

export const Board = forwardRef<BoardRef>((_, ref) => {
    const canvas_ref = useRef<HTMLCanvasElement>(null);
    const scene_ref = useRef<THREE.Scene>(null);
    const clock_ref = useRef<THREE.Clock>(null);
    const cards_ref = useRef<Card[]>([]);
    const stars_ref = useRef<Star[]>([]);

    useImperativeHandle(ref, () => ({
        add_card: () => {
            if(scene_ref.current && clock_ref.current){
                let [mat, type] = random_card();
                const card = create_card(mat);
                card.created_at = clock_ref.current?.elapsedTime;
                card.target = new THREE.Vector3(
                    (Math.random()-0.5), 
                    (cards_ref.current.length+1) * 0.01,
                    (Math.random()-0.5)
                );
                scene_ref.current.add(card);
                cards_ref.current.push(card);

                return type;
            }
            return null;
        },
        reaction: (good: boolean) => {
            console.log(stars_ref.current);
            for(var i = 0; i < 6; i++){
                let material = good ? STAR_MATERIAL : STAR_MATERIAL;
                const star = new THREE.Mesh(STAR_GEOMETRY, material) as unknown as Star;
                star.direction = Math.random() * Math.PI * 2;
                star.size = 0.15 + Math.random() * 0.01;
                star.speed = 0.5 + Math.random()*0.5;
                
                star.position.y = 7;
                star.rotation.x = -Math.PI/2;
                star.position.add(new THREE.Vector3(Math.cos(star.direction)*0.3, 0, Math.sin(star.direction)*0.3));
                star.scale.set(star.size, star.size, star.size);
                scene_ref.current?.add(star);
                stars_ref.current.push(star);
            }
        }
    }));

    useEffect(() => {
        if(!canvas_ref.current) return;

        const scene = new THREE.Scene();
        const clock = new THREE.Clock();
        const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const ambient_light = new THREE.AmbientLight(0xffffff, 0.5);
        const dir_light = new THREE.DirectionalLight(0xffffff, 2);

        scene_ref.current = scene;
        clock_ref.current = clock;

        dir_light.castShadow = true;
        dir_light.position.set(2, 5, -1);
        scene.add(ambient_light);
        scene.add(dir_light);
        scene.add(dir_light.target);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas_ref.current,
            alpha: true,
        });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.VSMShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.setSize( window.innerWidth, window.innerHeight );

        const floor_geometry = new THREE.PlaneGeometry(8, 8);
        const floor_material = new THREE.MeshStandardMaterial({

        });
        const floor_mesh = new THREE.Mesh(floor_geometry, floor_material);

        scene.add(floor_mesh);

        floor_mesh.receiveShadow = true;
        floor_mesh.rotation.x = -Math.PI / 2

        camera.position.y = 9;
        camera.rotation.x = -Math.PI/2;

        // const controls = new OrbitControls( camera, renderer.domElement );

        function handle_resize(){
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener("resize", handle_resize);

        function animate(){
            let delta = clock.getDelta();
            
            for(var i = 0; i < cards_ref.current.length; i++){
                const card = cards_ref.current[i];
                animate_card(card, (clock.elapsedTime - card.created_at)*1.5);
            };

            stars_ref.current.forEach(star => {
                star.size = star.size - 0.3 * delta;

                star.position.add(new THREE.Vector3(Math.cos(star.direction)*star.speed*delta, 0, Math.sin(star.direction)*star.speed*delta));
                star.scale.set(star.size, star.size, star.size);

                if(star.size <= 0.001) stars_ref.current = stars_ref.current.filter(s => s != star);
            });

            // controls.update();
            renderer.render( scene, camera );
        }
        renderer.setAnimationLoop( animate );

        return () => {
            window.removeEventListener("resize", handle_resize);
            renderer.setAnimationLoop(null);
            renderer.dispose();
        };
    }, [])

    return <>
        <canvas ref={canvas_ref}></canvas>
    </>
})