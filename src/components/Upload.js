import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Fragment } from "react/cjs/react.production.min";

export default function Upload() {
  const [audio, setAudio] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const handleCreateMusic = (event) => {
    event.preventDefault();
    setLoading(true);
    const fd = new FormData();
    fd.append("audio", audio);
    axios
      .post(process.env.REACT_APP_API_URL + "/audio/upload", fd)
      .finally(() => {
        setLoading(false);
      })
      .then((response) => {
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
    <form onSubmit={handleCreateMusic}>
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
                      disabled={loading}
                      className="h-full w-full opacity-100"
                      name={audio}
                      onChange={fileSelectHandler}
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  {" "}
                  <span>Accepted file type:mp3 only</span>
                </div>
              </div>
              <div className="mt-3 text-center pb-3 px-4">
                {" "}
                <button
                  className="inline-flex justify-center items-center px-4 py-4 transition ease-in-out duration-150 cursor-pointer w-full h-12 text-lg bg-blue-600 rounded text-white hover:bg-blue-700"
                  disabled={loading}
                  type="submit"
                >
                  {loading ? (
                    <Fragment>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Uploading</span>
                    </Fragment>
                  ) : 'Save'}
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
