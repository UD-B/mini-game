import { useRef, useState } from "react";

const GridLayout = () => {
    const [click, setclick] = useState(0)
    const [keep, setKeep] = useState("Click Any Cell")
    const board = []
    for (let i = 1; i < 26; i++) {
        board.push(i);
    }

    function refresh(){
        window.location.reload()
    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function randomColor() {
        return randomInt(1, 13)
    }

    const [color, setColor] = useState(randomColor())
    const secretLOcation = useRef(randomInt(1, 25)).current

    function handleClick(e, num) {
        if (e.target.classList.contains("empty")) return;
        if (keep === 'Victorious !!!') return;
        console.log('secret: ', secretLOcation);

        if (num === secretLOcation) {
            e.target.classList.add(`colors${color}`)
            e.target.classList.add("secret")
            e.target.textContent = ''
            setKeep('Victorious !!!')
            setclick(click + 1)

        } else {
            e.target.classList.add("empty")
            e.target.textContent = '×'
            setclick(click + 1)
            setKeep('Keep Searching')
        }
    }

    return (
        <>
            <header className='header'>
                <p id='find'>Find the </p>
                <p id='secret'> Hidden Color!</p>
                <div id='square' className={`colors${color}`}></div>
            </header>
            <main className='main'>
                <div id='grid'>
                    {board.map((num) =>
                        <div onClick={(e) => handleClick(e, num)} key={num} className='cell'></div>
                    )}
                </div>
            </main>
            <footer className='footer'>
                <div id='clicks-row'>
                    <div id='dont-move'>
                        <p id='clicks'>Clicks: </p>
                        <p id='num-clicks'>{click}</p>
                    </div>
                </div>
                <hr id='hr' />
                <p id='keep'>{keep}</p>
                <div id="button" onClick={()=>refresh()}>New Game</div>
            </footer>
        </>
    )
}

export default GridLayout