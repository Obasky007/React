import React from "react";

function Header() {
  return (
    <div>
      <nav className="bg-pink-700 flex justify-around items-center py-4 sticky shadow-2xl">
        <div className="flex justify-center items-center gap-3">
          <img src="vite.svg" alt="" className="w-10 h-10" />
          <h1 className="font-bold text-xl ">Vite</h1>
        </div>
        <div>
          <ol className="text-blue-600 underline flex justify-center items-center gap-10">
            <li>Home</li>
            <li>Jobs</li>
            <li>Service</li>
            <li>Contacts</li>
            <li>Applications</li>
          </ol>
        </div>
        <button className="bg-white px-4 py-1 rounded-xl">Login</button>
      </nav>
    </div>
  );
}

export default Header;
