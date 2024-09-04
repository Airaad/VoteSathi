import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "flowbite-react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="text-white font-semibold">
        Home
      </NavLink>
      <NavLink to="/about" className="text-white font-semibold">
        About
      </NavLink>
      <NavLink to="/login" className="text-white font-semibold">
        {" "}
        <Button pill className="bg-green-400  font-bold">
          Sign In
        </Button>
      </NavLink>
    </>
  );
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavabr = () => {
    console.log("I am toggling");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="hidden w-full justify-end gap-10 md:flex items-center">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavabr}>
            {isOpen ? <X color="#ffffff" /> : <Menu color="#ffffff" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex basis-full flex-col gap-3 items-center mt-7">
          <NavLinks />
        </div>
      )}
    </>
  );
}
