import React from "react";

function Header() {
  return (
    <div>
      <nav className="bg-pink-700 flex md:justify-around justify-center md:gap-0 gap-7 items-center py-4 sticky top-0 shadow-2xl">
        <div className="flex justify-center items-center gap-3">
          <img src="vite.svg" alt="" className="w-10 h-10" />
          <h1 className="font-bold text-xl ">Vite</h1>
        </div>
        <div className="md:block hidden">
          <ol className="text-blue-600 underline flex justify-center items-center gap-10">
            <li>Home</li>
            <li>Jobs</li>
            <li>Service</li>
            <li>Contacts</li>
            <li>Applications</li>
          </ol>
        </div>
        <button className="bg-transparent hover:bg-white px-4 py-1 rounded-xl text-white text-xl border-2 hover:text-pink-700">Login</button>
      </nav>
    </div>
  );
}

export default Header;
