import React from 'react'

const GridLayout = () => {
    return (
        <div id='background'>
            <header className='header'>
                <p id='find'>Find the</p>
                <p id='secret'>Secret Color!</p>
                <div id='square'></div>
            </header>
            <main className='main'>
                <div id='grid'></div>
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