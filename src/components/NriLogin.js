import React from "react";
import { Link } from "react-router-dom";
import Backdrop from "./Backdrop";
import { useState } from "react";
import { Loginhelp } from "./Loginhelp";

function NriLogin() {
  const [helpIsOpen, setHelpIsOpen] = useState(false);
  function toggleHelp() {
    setHelpIsOpen(!helpIsOpen);
  }

  return (
    <div className="w-screen h-screen bg-trout-500">
      <div className=" w-full flex items-center  justify-between px-20 py-10 h-14">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            class="bi bi-house-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
        </Link>

        {/* statub-bar
        <div className="flex items-center mr-52">
          <div className="flex absolute w-64  h-14 items-center ">
            <div className="bg-teal-350 lg:flex h-2 hidden ml-9 w-8 "></div>
            <div className="bg-white ml-10 h-2 lg:flex hidden w-10"></div>
            <div className="bg-white ml-6 h-2 lg:flex hidden w-10 "></div>
            <div className="lg:justify-between justify-center items-center absolute flex w-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#3debbf"
                class="bi hidden lg:flex  w-10 h-10 bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#3debbf"
                class="bi mr-8 lg:mr-0 w-10 h-10 bi-check-circle-fill "
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi hidden lg:flex w-10 h-10 bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
              <svg
                class=" hidden mt-0 lg:flex  w-12 h-12 "
                fill="none"
                stroke="white"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-width="1.2"
                  d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div> */}

        <svg
          onClick={toggleHelp}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          class="bi bi-question-circle-fill transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
        </svg>
        {helpIsOpen && <Backdrop onClick={toggleHelp} />}
        {helpIsOpen && <Loginhelp onClick={toggleHelp} />}
      </div>

      <div className="w-97 lg:flex lg:w-full h-97.5 mx-auto mt-4 lg:justify-between  bg-transparent">
        <div className="w-98 mt-20 h-full justify-center hidden lg:flex">
          <svg
            id="b368e7d6-7c4a-408c-9a35-0514749a7e1a"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width="869.99994"
            height="520.13854"
            viewBox="0 0 869.99994 520.13854"
            className="w-96 ml-40 h-96"
          >
            <path
              d="M831.09242,704.18737c-11.13833-9.4118-17.90393-24.27967-16.12965-38.75366s12.76358-27.78,27.01831-30.85364,30.50415,5.43465,34.83378,19.3594c2.3828-26.84637,5.12854-54.81757,19.40179-77.67976,12.92407-20.70115,35.3088-35.51364,59.5688-38.16357s49.80265,7.35859,64.93272,26.50671,18.83461,46.98549,8.2379,68.96911c-7.80623,16.19456-22.188,28.24676-37.2566,38.05184a240.45181,240.45181,0,0,1-164.45376,35.97709Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#f2f2f2"
            />
            <path
              d="M996.72788,546.00953a393.41394,393.41394,0,0,0-54.82622,54.44229,394.561,394.561,0,0,0-61.752,103.194c-1.112,2.72484,3.31272,3.911,4.4123,1.21642A392.34209,392.34209,0,0,1,999.96343,549.24507c2.28437-1.86015-.97-5.08035-3.23555-3.23554Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#fff"
            />
            <path
              d="M445.06712,701.63014c15.2985-12.92712,24.591-33.34815,22.15408-53.22817s-17.53079-38.15588-37.10966-42.37749-41.89745,7.46449-47.8442,26.59014c-3.27278-36.87349-7.04406-75.29195-26.64837-106.69317-17.75122-28.433-48.49666-48.778-81.81777-52.41768s-68.40395,10.107-89.18511,36.407-25.86934,64.53459-11.31476,94.72909c10.72185,22.24324,30.47528,38.79693,51.17195,52.26422,66.02954,42.9653,147.93912,60.88443,225.8773,49.41454"
              transform="translate(-165.00003 -189.93073)"
              fill="#f2f2f2"
            />
            <path
              d="M217.56676,484.37281a540.35491,540.35491,0,0,1,75.30383,74.77651A548.0761,548.0761,0,0,1,352.25665,647.04a545.835,545.835,0,0,1,25.43041,53.8463c1.52726,3.74257-4.55,5.37169-6.06031,1.67075a536.35952,536.35952,0,0,0-49.009-92.727A539.73411,539.73411,0,0,0,256.889,528.63168a538.44066,538.44066,0,0,0-43.76626-39.81484c-3.13759-2.55492,1.33232-6.97788,4.444-4.444Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#fff"
            />
            <path
              d="M789.5,708.93073h-365v-374.5c0-79.67773,64.82227-144.5,144.49976-144.5h76.00049c79.67749,0,144.49975,64.82227,144.49975,144.5Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#f2f2f2"
            />
            <path
              d="M713.5,708.93073h-289v-374.5a143.38177,143.38177,0,0,1,27.59571-84.94434c.66381-.90478,1.32592-1.79785,2.00878-2.68115a144.46633,144.46633,0,0,1,30.75415-29.85058c.65967-.48,1.322-.95166,1.99415-1.42334a144.15958,144.15958,0,0,1,31.47216-16.459c.66089-.25049,1.33374-.50146,2.00659-.74219a144.01979,144.01979,0,0,1,31.1084-7.33593c.65772-.08985,1.333-.16016,2.0083-.23047a146.28769,146.28769,0,0,1,31.10547,0c.67334.07031,1.34864.14062,2.01416.23144a143.995,143.995,0,0,1,31.10034,7.335c.6731.24073,1.346.4917,2.00879.74268a143.79947,143.79947,0,0,1,31.10645,16.21582c.67163.46143,1.344.93311,2.00635,1.40478a145.987,145.987,0,0,1,18.38354,15.564,144.305,144.305,0,0,1,12.72437,14.55078c.68066.88037,1.34277,1.77344,2.00537,2.67676A143.38227,143.38227,0,0,1,713.5,334.43073Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#ccc"
            />
            <circle cx="524.99994" cy="335.5" r="16" fill="#d8d8e8" />
            <polygon
              points="594.599 507.783 582.339 507.783 576.506 460.495 594.601 460.496 594.599 507.783"
              fill="#ffb8b8"
            />
            <path
              d="M573.58165,504.27982h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H558.69478a0,0,0,0,1,0,0v0a14.88688,14.88688,0,0,1,14.88688-14.88688Z"
              fill="#2f2e41"
            />
            <polygon
              points="655.599 507.783 643.339 507.783 637.506 460.495 655.601 460.496 655.599 507.783"
              fill="#ffb8b8"
            />
            <path
              d="M634.58165,504.27982h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H619.69478a0,0,0,0,1,0,0v0a14.88688,14.88688,0,0,1,14.88688-14.88688Z"
              fill="#2f2e41"
            />
            <path
              d="M698.09758,528.60035a10.74272,10.74272,0,0,1,4.51052-15.84307l41.67577-114.86667L764.791,409.082,717.20624,518.85271a10.80091,10.80091,0,0,1-19.10866,9.74764Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#ffb8b8"
            />
            <path
              d="M814.33644,550.1843a10.74269,10.74269,0,0,1-2.89305-16.21659L798.53263,412.4583l23.33776,1.06622L827.23606,533.045a10.80091,10.80091,0,0,1-12.89962,17.13934Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#ffb8b8"
            />
            <circle cx="612.1058" cy="162.12254" r="24.56103" fill="#ffb8b8" />
            <path
              d="M814.17958,522.54937H740.13271l.08911-.57617c.13306-.86133,13.19678-86.439,3.56177-114.436a11.813,11.813,0,0,1,6.06933-14.5835h.00025c13.77173-6.48535,40.20752-14.47119,62.52,4.90918a28.23448,28.23448,0,0,1,9.45947,23.396Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#d8d8e8"
            />
            <path
              d="M754.35439,448.1812,721.01772,441.418l15.62622-37.02978a13.99723,13.99723,0,0,1,27.10571,6.99755Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#d8d8e8"
            />
            <path
              d="M797.05043,460.73882l-2.00415-45.94141c-1.51977-8.63623,3.42408-16.80029,11.02735-18.13476,7.60547-1.32959,15.03174,4.66016,16.55835,13.35986l7.533,42.92774Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#d8d8e8"
            />
            <path
              d="M811.71606,517.04933c11.91455,45.37671,13.21436,103.0694,10,166l-16-2-29-120-16,122-18-1c-5.37744-66.02972-10.61328-122.71527-2-160Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#2f2e41"
            />
            <path
              d="M793.2891,371.03474c-4.582,4.88079-13.09131,2.26067-13.68835-4.40717a8.05467,8.05467,0,0,1,.01014-1.55569c.30826-2.95357,2.01461-5.63506,1.60587-8.7536a4.59046,4.59046,0,0,0-.84011-2.14892c-3.65124-4.88933-12.22227,2.18687-15.6682-2.23929-2.113-2.714.3708-6.98713-1.25065-10.02051-2.14006-4.00358-8.47881-2.0286-12.45388-4.22116-4.42275-2.43948-4.15822-9.22524-1.24686-13.35269,3.55052-5.03359,9.77572-7.71951,15.92336-8.10661s12.25292,1.27475,17.99229,3.51145c6.52109,2.54134,12.98768,6.05351,17.00067,11.78753,4.88021,6.97317,5.34986,16.34793,2.90917,24.50174C802.09785,360.98987,797.03077,367.04906,793.2891,371.03474Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#2f2e41"
            />
            <path
              d="M1004.98163,709.57417h-738.294a1.19069,1.19069,0,0,1,0-2.38137h738.294a1.19069,1.19069,0,0,1,0,2.38137Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#3f3d56"
            />
            <path
              d="M634,600.43073H504a6.46539,6.46539,0,0,1-6.5-6.41531V303.846a6.46539,6.46539,0,0,1,6.5-6.41531H634a6.46539,6.46539,0,0,1,6.5,6.41531V594.01542A6.46539,6.46539,0,0,1,634,600.43073Z"
              transform="translate(-165.00003 -189.93073)"
              fill="#fff"
            />
            <rect
              x="332.49994"
              y="201.38965"
              width="143"
              height="2"
              fill="#ccc"
            />
            <rect x="332.99994" y="315.5" width="143" height="2" fill="#ccc" />
            <rect x="377.49994" y="107.5" width="2" height="304" fill="#ccc" />
            <rect x="427.49994" y="107.5" width="2" height="304" fill="#ccc" />
          </svg>
        </div>
        <div className="lg:w-97 flex  lg:mt-18 mt-16 h-full mx-auto  bg-transparent shadow-3xl">
          <form
            action=""
            className="flex flex-col mx-auto  h-full w-97 bg-white "
          >
            <h1 className="mt-8 text-4xl text-center  font-semi-bold">
              SIGN-IN
            </h1>
            <div className="w-full h-full py-8 bg-white">
              <label htmlFor="username" className="ml-6 font-light text-2xl">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-96 ml-4 my-6 italic h-14 mt-2 px-5 text-xl rounded-full focus:outline-none border-2 border-black"
              />
              <label htmlFor="username" className="ml-6 font-light text-2xl">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-96 ml-4 italic h-14 mt-2 px-5 text-xl rounded-full focus:outline-none border-2 border-black"
              />
              <Link
                to="/nri"
                className="flex items-center mt-8 ml-6 justify-center w-30 shadow-2xl rounded-full h-14 border-2 border-red-600 text-red-600 text-2xl hover:text-white hover:bg-red-600"
              >
                Sign-In
              </Link>
              <a
                class="font-light text-xl text-black-500 text-red-600 
              hover:text-indigo-600 ml-64 "
                href="https://github.com/NANDAKRISHNAN-P-N"
              >
                Forgot Password!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NriLogin;