import { useState } from "react"

type Settings = {
    delay: number
    random: number
    num_cards: number
}

export const useSettings = (): [Settings, (key: keyof Settings, value: any) => void] => {
    const [settings, set_settings] = useState<Settings>({
        delay: 1200,
        random: 350,
        num_cards: 50
    });

    function set(key: keyof Settings, value: any){
        set_settings({
            ...settings,
            [key]: value
        })
    }

    return [settings, set];
}