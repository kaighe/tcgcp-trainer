import { useEffect, useRef } from 'react'
import './App.css'
import { Board, BoardRef } from './components/Board';

function App() {
    let board = useRef<BoardRef>(null);

    const handleKeyDown = (event: KeyboardEvent) => {
        if(event.key === ' '){
            board.current?.add_card();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [])
    
    return (
        <>
            <Board ref={board}></Board>
        </>
    )
}

export default App