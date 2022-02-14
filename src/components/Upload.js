import React from "react";

export default function Upload() {
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
                    <div className="absolute">
                      <div className="flex flex-col items-center ">
                        {" "}
                        <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>{" "}
                        <span className="block text-gray-400 font-normal">
                          Attach you files here
                        </span>{" "}
                        <span className="block text-gray-400 font-normal">or</span>{" "}
                        <span className="block text-blue-400 font-normal">
                          Browse files
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      className="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    {" "}
                    <span>Accepted file type:mp3 only</span>
                  </div>
                </div>
                <div className="mt-3 text-center pb-3">
                  {" "}
                  <button className="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700">
                    Create
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
