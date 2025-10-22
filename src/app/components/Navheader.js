import React from 'react'

function Navheader() {
    return (
        <header className="text-center">
            <h1 className='font-extrabold text-4xl bg-gradient-to-r from-purple-300 via-red-400 to-pink-500 text-transparent bg-clip-text shadow-lg inline-block' style={{ filter: 'drop-shadow(0 0 10px rgba(235, 70, 150, 0.7))' }}>
                FACECUY | PREDICTFACE
            </h1>
            <p>Ramal berdasarkan foto kalian</p>
        </header>
    )
}

export default Navheader