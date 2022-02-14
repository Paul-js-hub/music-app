import React, { useEffect, useState } from "react";
import axios from 'axios'
import Player from "./Player";

const Home = () => {
  const [music, setMusic] = useState([]);
  useEffect(()=>{
    const fetchMusic = async ()=>{
        const result = await axios(process.env.REACT_APP_API_URL +'/audio');
        //console.log("RESULT", result)
    }
    fetchMusic();
  })

  return (
    <div>
      <Player />
    </div>
  );
};

export default Home;
