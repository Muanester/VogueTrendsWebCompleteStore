import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Track() {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-5  mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <svg
                  className="text-pink-600 w-12 h-12 mb-3 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <h2
                  className="title-font font-medium text-lg text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Premium Products
                </h2>
                <p className="leading-relaxed">
                  Our Products are 100% premium.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100  px-4 py-6 rounded-lg"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-pink-600 w-12 h-12 mb-3 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>

                <h2
                  className="title-font font-medium text-lg text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Country-wide Shipping
                </h2>
                <p className="leading-relaxed">We ship all over Kenya.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-pink-600 w-12 h-12 mb-3 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.174,14.993h1.647c0.228,0,0.412-0.184,0.412-0.411v-1.648c0-0.228-0.185-0.411-0.412-0.411h-1.647c-0.227,0-0.412,0.184-0.412,0.411v1.648C10.762,14.81,10.947,14.993,11.174,14.993 M3.759,13.346h4.943c0.227,0,0.412-0.184,0.412-0.412c0-0.228-0.185-0.411-0.412-0.411H3.759c-0.227,0-0.412,0.184-0.412,0.411C3.347,13.162,3.532,13.346,3.759,13.346 M3.759,14.993h3.295c0.228,0,0.412-0.184,0.412-0.411S7.282,14.17,7.055,14.17H3.759c-0.227,0-0.412,0.185-0.412,0.412S3.532,14.993,3.759,14.993 M14.881,5.932H1.7c-0.455,0-0.824,0.369-0.824,0.824v9.886c0,0.454,0.369,0.823,0.824,0.823h13.181c0.455,0,0.823-0.369,0.823-0.823V6.755C15.704,6.301,15.336,5.932,14.881,5.932M14.881,16.642H1.7v-5.767h13.181V16.642z M14.881,8.403H1.7V6.755h13.181V8.403z M18.176,2.636H4.995c-0.455,0-0.824,0.37-0.824,0.824v1.236c0,0.228,0.185,0.412,0.412,0.412c0.228,0,0.412-0.184,0.412-0.412V3.46h13.181v9.886H16.94c-0.228,0-0.412,0.185-0.412,0.412s0.185,0.412,0.412,0.412h1.235c0.455,0,0.824-0.369,0.824-0.824V3.46C19,3.006,18.631,2.636,18.176,2.636"
                  />
                </svg>

                <h2
                  className="title-font font-medium text-lg text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Exciting Offers
                </h2>
                <p className="leading-relaxed">We provide amazing discounts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Track;
