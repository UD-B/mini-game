import React from 'react'

const GridLayout = () => {

    const board = []
    for (let i = 1; i <= 100; i++) {
        board.push(i);
    }
    console.log('x:', board.length);

    return (
        <div id='background'>
            <header className='header'>
                <p id='find'>Find the </p>
                <p id='secret'> Secret Color!</p>
                <div id='square'></div>
            </header>
            <main className='main'>
                <div id='grid'>
                    {board.map((num) =>
                        <div onClick={null} key={num} id='cell'></div>
                    )}
                </div>
            </main>
            <footer className='footer'>
                <div id='clicks-row'>
                    <div id='dont-move'>
                        <p id='clicks'>Clicks: </p>
                        <p id='num-clicks'>0</p>
                    </div>
                </div>
                <hr id='hr'/>
                <p id='keep'>keep</p>
            </footer>
        </div>
    )
}

export default GridLayout