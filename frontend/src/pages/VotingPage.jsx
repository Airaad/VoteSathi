import React from "react";
import { NavLink } from "react-router-dom";

export default function VotingPage() {
  return (
    <div className="p-10 flex flex-col gap-6 justify-center">
      <div className="flex gap-4 bg-orange-400 rounded-lg px-6 py-8">
        <NavLink to="">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Indian_National_Congress_hand_logo.png/480px-Indian_National_Congress_hand_logo.png"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full object-cover border-2 border-transparent hover:border-black transition duration-300"
          />
        </NavLink>
        <div className="flex flex-col justify-between">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">
            Congress Party
          </h3>
          <button className="py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg text-lg">
            Vote
          </button>
        </div>
      </div>

      <div className="flex gap-4 bg-orange-400 rounded-lg px-6 py-8">
        <NavLink to="">
          <img
            src="https://i.pinimg.com/236x/71/eb/2c/71eb2cc75e9615acd590e8b8e3967707.jpg"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full object-cover border-2 border-transparent hover:border-black transition duration-300"
          />
        </NavLink>
        <div className="flex flex-col justify-between">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">
            Bhartia Janta Party
          </h3>
          <button className="py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg text-lg">
            Vote
          </button>
        </div>
      </div>

      <div className="flex gap-4 bg-orange-400 rounded-lg px-6 py-8">
        <NavLink to="">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5R1eSjloExCcJSeJC6vA2TfKoL8f6kSnzQ&s"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full object-cover border-2 border-transparent hover:border-black transition duration-300"
          />
        </NavLink>
        <div className="flex flex-col justify-between">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">
            Aam Aadmi Party
          </h3>
          <button className="py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg text-lg">
            Vote
          </button>
        </div>
      </div>

      <div className="flex gap-4 bg-orange-400 rounded-lg px-6 py-8">
        <NavLink to="">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-vqk_PdvszlfyXEH_vOezvsqlZz1YNaFCQ&s"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full object-cover border-2 border-transparent hover:border-black transition duration-300"
          />
        </NavLink>
        <div className="flex flex-col justify-between">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">
            Bahujan Samaj Party
          </h3>
          <button className="py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg text-lg">
            Vote
          </button>
        </div>
      </div>

      <div className="flex gap-4 bg-orange-400 rounded-lg px-6 py-8">
        <NavLink to="">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Jammu_and_Kashmir_%281936-1953%29.svg/640px-Flag_of_Jammu_and_Kashmir_%281936-1953%29.svg.png"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full object-cover border-2 border-transparent hover:border-black transition duration-300"
          />
        </NavLink>
        <div className="flex flex-col justify-between">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">
            National Conference Party
          </h3>
          <button className="py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg text-lg">
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}
