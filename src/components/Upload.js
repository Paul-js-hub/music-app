import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Upload() {
  const [audio, setAudio] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const handleCreateMusic = () => {
    setLoading(true);
    const fd = new FormData();
    fd.append("audio", audio);
    axios
      .post(process.env.REACT_APP_API_URL + "/audio/upload", fd)
      .then((response) => {
        setLoading(false);
        const message = response.data.message;
        toast.success(message);
        if (message === "Your music has been successfully uploaded") {
          navigate("/");
        }
      })
      .catch((error) => {
        const message = error.response.data.message;
        toast.error(message);
      });
  };

  const fileSelectHandler = (e) => {
    setAudio(e.target.files[0]);
  };

  return (
    <div>
      <div className="py-20 h-screen bg-gray-300 px-2">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
          <div className="md:flex">
            <div className="w-full">
              <div className="p-4 border-b-2">
                {" "}
                <span className="text-lg font-bold text-gray-600">
                  Add Music
                </span>{" "}
              </div>
              <div className="p-3">
                <div className="mb-2">
                  {" "}
                  <span></span>
                  <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                    <input
                      type="file"
                      className="h-full w-full opacity-100"
                      name={audio}
                      onChange={fileSelectHandler}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  {" "}
                  <span>Accepted file type:mp3 only</span>
                </div>
              </div>
              <div className="mt-3 text-center pb-3">
                {" "}
                <button
                  className="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700"
                  onClick={handleCreateMusic}
                >
                  Save
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
