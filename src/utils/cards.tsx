import * as THREE from "three"

const textureLoader = new THREE.TextureLoader();

function fix_colorspace(data: THREE.Texture<HTMLImageElement>){
    data.colorSpace = THREE.SRGBColorSpace;
}

function generate_material(texture: THREE.Texture){
    return new THREE.MeshStandardMaterial({
        map: texture,
        alphaTest: 0.01,
        side: THREE.FrontSide,
        metalness: 0,
        roughness: 0.4,
        transparent: true,
        opacity: 0
    });
}

export enum CardType {
    TACO = "taco",
    CAT = "cat",
    GOAT = "goat",
    CHEESE = "cheese",
    PIZZA = "pizza",
    NARWHAL = "narwhal",
    GROUNDHOG = "groundhog",
    GORILLA = "gorilla"
}

export function random_material(){
    return ALL_MATERIALS[Math.floor(Math.random() * ALL_MATERIALS.length)];
}

export const CARD_GEOMETRY = new THREE.PlaneGeometry(5, 7);

export const CARD_MATERIALS = {
    back: [
        generate_material(textureLoader.load('/cards/back_1.png', fix_colorspace)),
    ],
    taco: [
        generate_material(textureLoader.load('/cards/taco_1.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/taco_2.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/taco_3.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/taco_4.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/taco_5.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/taco_6.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/taco_7.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/taco_8.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/taco_9.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/taco_10.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/taco_10.png', fix_colorspace)),
    ],
    cat: [
        generate_material(textureLoader.load('/cards/cat_1.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cat_2.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cat_3.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cat_4.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cat_5.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cat_6.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cat_7.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cat_8.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cat_9.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cat_10.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cat_11.png', fix_colorspace)),
    ],
    goat: [
        generate_material(textureLoader.load('/cards/goat_1.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/goat_2.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/goat_3.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/goat_4.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/goat_5.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/goat_6.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/goat_7.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/goat_8.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/goat_9.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/goat_10.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/goat_11.png', fix_colorspace)),
    ],
    cheese: [
        generate_material(textureLoader.load('/cards/cheese_1.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cheese_2.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cheese_3.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cheese_4.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cheese_5.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cheese_6.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cheese_7.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cheese_8.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cheese_9.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cheese_10.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/cheese_10.png', fix_colorspace)),
    ],
    pizza: [
        generate_material(textureLoader.load('/cards/pizza_1.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/pizza_2.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/pizza_3.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/pizza_4.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/pizza_5.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/pizza_6.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/pizza_7.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/pizza_8.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/pizza_9.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/pizza_10.png', fix_colorspace)),
        generate_material(textureLoader.load('/cards/pizza_10.png', fix_colorspace)),
    ],
}

const ALL_MATERIALS = [
    ...CARD_MATERIALS.taco,
    ...CARD_MATERIALS.cat,
    ...CARD_MATERIALS.goat,
    ...CARD_MATERIALS.cheese,
    ...CARD_MATERIALS.pizza,
]