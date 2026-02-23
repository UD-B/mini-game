import React from 'react'

const GridLayout = () => {

    const board = []
    for (let i = 0; i < 100; i++) {
        board.push[i];
    }

    return (
        <div id='background'>
            <header className='header'>
                <p id='find'>Find the</p>
                <p id='secret'>Secret Color!</p>
                <div id='square'></div>
            </header>
            <main className='main'>
                <div id='grid'>
                    {board.map((num) => {
                        <div onClick={null} key={num} className='cell'>{num}</div>
                    })}
                </div>
            </main>
            <footer className='footer'>
                <div id='clicks-row'>
                    <p id='clicks'>Clicks: </p>
                    <p id='num-clicks'></p>
                </div>
                <p id='keep'></p>
            </footer>
        </div>
    )
}

export default GridLayout