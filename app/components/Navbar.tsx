"use client";

import Link from "next/link";
import { useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { useShoppingCart } from "use-shopping-cart";
import { ImMenu, ImCross, ImCircleDown, ImArrowRight } from "react-icons/im";

const links = [
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Shoes", href: "/Shoes" },
  { name: "Accessories", href: "/Accessories" },
];

interface MobileNavProps {
  showMobileMenu: () => void;
  closeMobileMenu: () => void;
  isMobileMenuActive: boolean;
}

function NavMenu() {
  return (
    <>
      <div className="absolute z-20 max-h-0 w-full max-w-56 overflow-hidden border-stone-800 bg-stone-50 shadow-[-10px_10px_0px_0px_#292524] transition-[max-height] group-hover:max-h-64 group-hover:border-2">
        <ul className="px-2 py-3 font-bold lowercase">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex w-full items-center justify-between p-2 decoration-2 hover:underline`}
              >
                <li>{link.name}</li>
                <ImArrowRight className="text-sm" />
              </Link>
            );
          })}
          <Link
            key={"all"}
            href={"/all"}
            className={`flex w-full items-center justify-between p-2 decoration-2 hover:underline`}
          >
            <li>all</li>
            <ImArrowRight className="text-sm" />
          </Link>
        </ul>
      </div>
    </>
  );
}
//
// CartButton
function CartButton() {
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <button
      onClick={() => {
        handleCartClick();
        document.body.classList.add("overflow-hidden");
      }}
      className="relative cursor-pointer"
    >
      <IoCartSharp className="text-4xl" />
      <span className="absolute top-1.5 text-[10px] text-stone-50">
        {cartCount}
      </span>
    </button>
  );
}
//
// Desktop Navigation
function DesktopNav() {
  return (
    <div className="relative hidden border-y-[3px] border-stone-800 md:block">
      <ul className="mx-auto flex max-w-2xl items-center justify-between py-3 font-bold uppercase">
        <li className="decoration-2 underline-offset-4 hover:underline">
          <Link href="/" className="p-3">
            Home
          </Link>
        </li>
        <li className="group decoration-2 underline-offset-4 hover:cursor-pointer hover:underline">
          <div className="p-3">Shop</div>
          <NavMenu />
        </li>
        {/* Brand Logo */}
        <div className="border-2 border-stone-800 p-2 select-none">
          <span className="text-xl uppercase md:text-3xl">Street</span>
          <span className="md:text-lg">co.</span>
        </div>
        <li className="decoration-2 underline-offset-4 hover:underline">
          <Link href="/about" className="p-3">
            About
          </Link>
        </li>
        <li className="decoration-2 underline-offset-4 hover:underline">
          <Link href="/contact" className="p-3">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
//
// MobileNavigation
function MobileNav({
  showMobileMenu,
  closeMobileMenu,
  isMobileMenuActive,
}: MobileNavProps) {
  const [isAccordionActive, setIsAccordionActive] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionActive(!isAccordionActive);
  };

  return (
    <div className="md:hidden">
      <div className="mx-auto flex w-full max-w-5xl items-center border-y-[3px] border-stone-800 md:w-4/5 xl:w-full">
        {/* Menu Button */}
        <button onClick={showMobileMenu} className="p-3">
          <ImMenu className="text-3xl" />
        </button>
        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 border-2 border-stone-800 p-1.5 font-bold select-none">
          <span className="text-xl uppercase xl:text-3xl">Street</span>
          <span className="xl:text-lg">co.</span>
        </div>
      </div>
      <div
        className={`${isMobileMenuActive ? "left-0" : "-left-full"} absolute top-0 z-20 mx-auto h-screen w-2/3 max-w-2xl border-r-4 border-stone-800 bg-stone-50 font-bold uppercase transition-all lg:block`}
      >
        <div className="flex justify-end">
          {/* Close Menu Button */}
          <button onClick={closeMobileMenu} className="p-4">
            <ImCross className="text-2xl" />
          </button>
        </div>
        {/* Menu Links */}
        <ul className="flex flex-col">
          <Link
            onClick={closeMobileMenu}
            href="/"
            className="decoration-2 underline-offset-4 hover:underline"
          >
            <li className="border-y border-stone-800 px-4 py-6">Home</li>
          </Link>
          {/* Accordion */}
          <button
            onClick={toggleAccordion}
            className="flex items-center justify-between border-b border-stone-800 px-4 py-6 text-left uppercase decoration-2 underline-offset-4 hover:underline"
          >
            <span>Shop</span>
            <span
              className={`${isAccordionActive ? "rotate-180" : ""} text-xl transition-all`}
            >
              <ImCircleDown />
            </span>
          </button>
          <div
            className={`${isAccordionActive ? "max-h-48" : "max-h-0"} overflow-hidden bg-stone-200 transition-[max-height] duration-500`}
          >
            {/* Category List */}
            <ul className="lowercase">
              {links.map((link) => {
                return (
                  <Link
                    onClick={closeMobileMenu}
                    key={link.name}
                    href={link.href}
                    className={`flex w-full items-center justify-between border-b border-stone-400 px-4 py-3 decoration-2 hover:underline`}
                  >
                    <li>{link.name}</li>
                    <ImArrowRight className="text-sm" />
                  </Link>
                );
              })}
            </ul>
          </div>
          <Link
            onClick={closeMobileMenu}
            href="/about"
            className="decoration-2 underline-offset-4 hover:underline"
          >
            <li className="border-b border-stone-800 px-4 py-6">About</li>
          </Link>
          <Link
            onClick={closeMobileMenu}
            href="/contact"
            className="decoration-2 underline-offset-4 hover:underline"
          >
            <li className="border-b border-stone-800 px-4 py-6">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const showMobileMenu = () => {
    setIsMobileMenuActive(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <nav className="text-stone-800">
        {/* Top section of Navbar */}
        <div className="flex w-full">
          <div className="mx-auto flex w-full max-w-2xl items-center justify-end space-x-8 px-3 py-2 font-bold">
            <CartButton />
          </div>
        </div>
        {/* Mobile Nav */}
        <MobileNav
          showMobileMenu={showMobileMenu}
          closeMobileMenu={closeMobileMenu}
          isMobileMenuActive={isMobileMenuActive}
        />
        {/* Desktop Nav */}
        <DesktopNav />
      </nav>
      {isMobileMenuActive && (
        <div
          onClick={closeMobileMenu}
          className="absolute top-0 left-0 z-10 h-screen w-screen bg-stone-800 opacity-30"
        ></div>
      )}
    </>
  );
}
