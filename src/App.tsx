import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Board, BoardRef } from './components/Board';
import { Settings } from './components/Settings';
import { CardType } from './utils/cards';
import { useSettings } from './hooks/useSettings';

// I hate react and gave up on using components
// halfway through this shit.

const CARDS = [
    CardType.TACO,
    CardType.CAT,
    CardType.GOAT,
    CardType.CHEESE,
    CardType.PIZZA,
]

function App() {
    let [settings, set_settings] = useSettings();
    let board = useRef<BoardRef>(null);
    let [target_card, set_target_card] = useState<CardType | null>(null);
    let [current_card, set_current_card] = useState<CardType | null>(null);
    let [cards_left, set_cards_left] = useState(0);
    let waiting_since = useRef(0);
    let is_waiting = useRef(false);
    let timeout = useRef<number | null>(null);
    let timings = useRef<number[]>([]);

    let [reaction_time, set_reaction_time] = useState(0);

    let [start_visible, set_start_visible] = useState(true);
    let [stats_visible, set_stats_visible] = useState(false);

    const handleKeyDown = (event: KeyboardEvent) => {
        let t = performance.now();

        if(event.key === ' ' && is_waiting.current){
            timings.current.push(t - waiting_since.current);

            is_waiting.current = false;
            timeout.current = random_timeout();
        }
    }

    const random_timeout = () => {
        return setTimeout(turn, settings.delay + (Math.random() * 2 - 1) * settings.random);
    }

    const start = () => {
        if(timeout.current != null) clearTimeout(timeout.current);
        set_cards_left(settings.num_cards);
        set_target_card(null)
        set_current_card(null);
        timings.current = [];

        timeout.current = random_timeout();
    }

    const end = () => {
        if(timeout.current != null) clearTimeout(timeout.current);
        set_target_card(null);
        set_stats_visible(true);
        console.log("END");

        let total = 0;
        for(var i = 0; i < timings.current.length; i++){
            total += timings.current[i];
        }

        if(timings.current.length == 0){
            set_reaction_time(-1);
        }else{
            set_reaction_time(Math.floor(total / timings.current.length));
        }
    }

    const turn = () => {
        let type = board.current?.add_card();
        if(type != null){
            set_current_card(type);
            set_target_card(x => x == null ? CARDS[0] : CARDS[(CARDS.indexOf(x)+1) % CARDS.length]);

            set_cards_left(x => x-1);
            timeout.current = random_timeout();
        }else{
            timeout.current = setTimeout(turn, 500);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            if(timeout.current != null) clearTimeout(timeout.current);
        }
    }, [])

    useEffect(() => {
        if(current_card != null){
            if(current_card == target_card){
                if(timeout.current != null) clearTimeout(timeout.current);
                setTimeout(() => {
                    is_waiting.current = true;
                    waiting_since.current = performance.now();
                }, 435)
            }else if(cards_left <= 0){
                end();
            }
        }
    }, [current_card, target_card, cards_left])
    
    return (
        <>
            {/* <Settings></Settings>  */}
            <Board ref={board}></Board>

            <div id="card-indicator">
                {CARDS.map(card => (
                    <div key={card} className={"card-name " + (card == target_card ? "active" : "")}>{card.toUpperCase()}</div>
                ))}
            </div>

            <div id="cards-left">{cards_left >= 0 ? cards_left : "0"}</div>

            <div id="start-button" className={start_visible ? "active" : ""} onClick={() => {set_start_visible(false); start()}}>START</div>

            <div id="stats-container" className={stats_visible ? "active": ""}>
                <div>Your reaction time averaged <span id="reaction-time">{reaction_time}ms</span>, nice job!</div>
                <div id="try-again" onClick={() => {
                    set_stats_visible(false);
                    start();
                }}>TRY AGAIN</div>
            </div>
        </>
    )
}

export default App