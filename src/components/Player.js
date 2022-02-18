import React from 'react'
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';
const Player = (props)=>{
  return (
    <div className="text-white block m-auto p-12 rounded-2xl mb-6 bg-slate-900">
        <h1 className='text-sm uppercase font-normal text-center'>Playing now</h1>
        <PlayerDetails title={props.title}/>
        <PlayerControls src={props.src}/>
    </div>
  )
}

export default Player