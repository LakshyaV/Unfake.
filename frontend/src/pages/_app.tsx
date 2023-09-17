import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const Logo = () => {
  return (
    <>
    </>
  )
}

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div className="">
        {/* Desktop View */}
        <nav className="hidden sm:flex flex-row items-center justify-center align-middle p-10">
          <div className="font-bold text-2xl w-1/3">
            {/* <img src="/logo.png" alt="" /> */}
            <a href="/">Unfake.</a>
          </div>
          <div className="w-1/3 flex flex-row gap-4 align-middle justify-center items-center">
            <a href="/" className="font-bold">Home</a>
            <a href="/scan" className="font-bold">Scan</a>
            <a href="/make" className="font-bold">Make</a>
            <a href="https://devpost.com/software/unfake" target="_blank" className="font-bold">Devpost</a>
          </div>
          <div className="w-1/3 flex flex-row gap-4 align-middle justify-end items-center">
              <a href="/login"><button className="bg-blue-500 px-5 py-1 rounded-3xl text-white font-bold">Login</button></a>
            <a href="/signup"><button className="bg-blue-500 px-5 py-1 rounded-3xl text-white font-bold">Sign Up</button></a>
          </div>
        </nav>
        {/* Mobile View */}
        <nav className="navbar flex sm:hidden flex-row items-center align-middle">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/" className="">Home</a></li>
                <li><a href="/scan" className="">Scan</a></li>
                <li><a href="/make" className="">Make</a></li>
                <li><a href="https://devpost.com/software/unfake" target="_blank" className="">Devpost</a></li>
              </ul>
            </div>
          </div>
          <div className="navbar-end">
            <div className="flex flex-row gap-4">
              <a href="/login"><button className="bg-blue-500 px-5 py-1 rounded-3xl text-white font-bold">Login</button></a>
              <a href="/signup"><button className="bg-blue-500 px-5 py-1 rounded-3xl text-white font-bold">Sign Up</button></a>
            </div>
          </div>
        </nav>
        <Component {...pageProps} />
      </div >
    </>
  )
};

export default MyApp;
