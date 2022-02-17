import React, { useEffect, useState } from "react";
import axios from "axios";
import Player from "./Player";

const Home = () => {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    const fetchMusic = async () => {
      const result = await axios(process.env.REACT_APP_API_URL + "/audio");
      setMusic(result.data);
    };
    fetchMusic();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <ul>
        {music.map((item) => {
          return (
            <li key={item._id}>
              <Player
                title={item.title}
                src={item.musicUrl}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
