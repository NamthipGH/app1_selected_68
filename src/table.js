import React from 'react'

export function Table() {
    const data = [
        ['JavaScript',100],
        ['React',150],
        ['React Native',180],
        ['Node.js',200],
        ['VS Code',120]

    ]
    const onMouseOverRow =(ev)=>{
        ev.target.parentNode.style.backgroundColor ='yellow'
    }

    const onMouseOutRow = (ev) => {
        ev.target.parentNode.style.backgroundColor ='white'
    }
}