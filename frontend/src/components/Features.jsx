import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { BsTransparency } from "react-icons/bs";
import { TbHandClick } from "react-icons/tb";

export default function Features() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center">
      <div className="bg-orange-400 p-20 flex gap-2">
        <MdOutlineSecurity className="text-6xl hover:animate-wiggle" />
        <div className="mt-4">
          <h2 className="font-semibold text-xl">Tamper-Proof Security</h2>
          <p>
            Each vote is recorded on the decentralized that cannot be altered or
            erased
          </p>
        </div>
      </div>

      <div className="bg-white p-20 flex gap-2">
        <BsTransparency className="text-6xl hover:animate-wiggle" />
        <div className="mt-4">
          <h2 className="font-semibold text-xl">Transparency</h2>
          <p>
            All votes are recorded on a public ledger, allowing full visibility
            in voting process
          </p>
        </div>
      </div>

      <div className="bg-green-400 p-20 flex gap-2">
        <TbHandClick className="text-6xl hover:animate-wiggle" />
        <div className="mt-4">
          <h2 className="font-semibold text-xl">Easily-Accessible</h2>
          <p>
            Votsathi offers an intuitive and accessible interface that ensures a
            seamless voting experience for all users
          </p>
        </div>
      </div>
    </div>
  );
}
