import { useEffect, useRef, useState } from "react"
import "./Settings.css"

export const Settings = () => {
    const container_ref = useRef<HTMLDivElement>(null);
    const [open, set_open] = useState(false);

    function on_click(){
        set_open(true);
    }

    function on_outside_click(event: PointerEvent){
        if(!container_ref.current?.contains(event.target as Node)){
            set_open(false);
        }
    }

    useEffect(() => {
        if(!container_ref.current) return;

        container_ref.current.addEventListener("click", on_click);
        document.addEventListener("click", on_outside_click);

        return () => {
            if(!container_ref.current) return;

            container_ref.current.removeEventListener("click", on_click);
            document.removeEventListener("click", on_outside_click);
        }
    }, [])

    return <div 
        id="settings-container"
        ref={container_ref}
        className={open ? "open" : undefined}
    >

    </div>
}