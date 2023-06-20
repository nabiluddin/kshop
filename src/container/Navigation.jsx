import React from "react";

function Navigation() {
  return (
    <section className="fixed top-0 left-0 right-0 h-[60px] z-20 flex items-center justify-between text-white bg-[#131921] shadow-sm shadow-dark-gray/70">
      <a className="text-2xl xs:text-3xl ml-6 md:ml-8 md:text-3xl" href="/">
        <h1 className="font-bold">
          K<span className="text-sad-yellow"> - Shop</span>
        </h1>
      </a>
      <nav className="h-full grid grid-cols-3">
        <a
          className="px-3 xs:px-6 text-2xl flex justify-center items-center gap-3 xs:border-x-[1px] border-gray-300"
          href="/login"
        >
          <i className="bx bx-user"></i>
          <h2 className="hidden lg:block text-lg">User</h2>
        </a>
        <a
          className="px-3 xs:px-6 text-2xl flex justify-center items-center gap-3 xs:border-x-[1px] border-gray-300"
          href="/purchases"
        >
          <i className="bx bx-purchase-tag"></i>
          <h2 className="hidden lg:block text-lg">Purchases</h2>
        </a>
        <button className="px-3 xs:px-6 text-2xl flex gap-3 items-center justify-center xs:border-x-[1px] border-gray-300">
          <i className="bx bx-cart"></i>
          <h2 className="hidden lg:block text-lg">Cart</h2>
        </button>
      </nav>
    </section>
  );
}

export default Navigation;
