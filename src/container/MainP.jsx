import React, { useState } from "react";
import Product from "./Product";
import Navigation from "./Navigation";

function MainP() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div classNameName="upper">
      <section className="grid grid-rows-[auto_1fr] min-h-screen font-['Yantramanav']">
        <Navigation />
        <main className="flex w-full mt-[60px] min-h-screen">
          <aside className="w-[200px] pt-12 border-[1px] bg-light-gray hidden md:block">
            <button
              className="border-b-2 text-2xl p-4 flex items-center gap-2 hover:scale-105"
              onClick={() => setDropDown(!dropDown)}
            >
              <h2>Categories</h2>
              <i className="bx bx-chevron-down">
                {dropDown ? (
                  <ul className="transition-all duration-500 max-h-screen opacity-100 overflow-hidden">
                    <br />
                    <li
                      className="cursor-pointer text-lg p-4 hover:bg-happy-yellow hover:text-xl"
                      data-category="0"
                    >
                      All
                    </li>
                    <li
                      className="cursor-pointer text-lg p-4 hover:bg-happy-yellow hover:text-xl"
                      data-category="1"
                    >
                      Stoves
                    </li>
                    <li
                      className="cursor-pointer text-lg p-4 hover:bg-happy-yellow hover:text-xl"
                      data-category="2"
                    >
                      Smart TV
                    </li>
                    <li
                      className="cursor-pointer text-lg p-4 hover:bg-happy-yellow hover:text-xl"
                      data-category="3"
                    >
                      Smartphones
                    </li>
                    <li
                      className="cursor-pointer text-lg p-4 hover:bg-happy-yellow hover:text-xl"
                      data-category="4"
                    >
                      Computers
                    </li>
                  </ul>
                ) : null}
              </i>
            </button>
          </aside>
          <section className="pt-12 mx-2 flex-grow">
            <form className="h-[45px] max-w-2xl mx-auto px-4 mb-4 md:mb-8">
              <div className="flex w-full h-full border-[1px] rounded-md overflow-hidden">
                <input
                  className="w-full py-3  outline-none pl-4 placeholder-slate-400"
                  id="productName"
                  type="text"
                  placeholder="What are you looking for?"
                />
                <button className="bg-happy-yellow hover:bg-happy-yellow-hover h-full aspect-square">
                  <i className="bx bx-search font-semibold text-2xl border-0"></i>
                </button>
              </div>
            </form>
            <ul className="transition-all flex flex-wrap gap-2 justify-center items-center duration-500 overflow-hidden md:hidden">
              <li
                className="cursor-pointer border-[1px] rounded-md text-sm py-2 px-4 hover:bg-happy-yellow"
                data-category="0"
              >
                {" "}
                All{" "}
              </li>
              <li
                className="border-[1px] cursor-pointer rounded-md text-sm py-2 px-4 hover:bg-happy-yellow"
                data-category="1"
              >
                Stoves
              </li>
              <li
                className="border-[1px] cursor-pointer rounded-md text-sm py-2 px-4 hover:bg-happy-yellow"
                data-category="2"
              >
                Smart TV
              </li>
              <li
                className="border-[1px] cursor-pointer rounded-md text-sm py-2 px-4 hover:bg-happy-yellow"
                data-category="3"
              >
                Smartphones
              </li>
              <li
                className="border-[1px] cursor-pointer rounded-md text-sm py-2 px-4 hover:bg-happy-yellow"
                data-category="4"
              >
                Computers
              </li>
            </ul>
            <section className="grid gap-8 py-6 mb-8 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_320px))] justify-center mx-auto">
              <Product pimg='https://e-commerce-api-v2.academlo.tech/uploads/d.jpg' company="Samsung" pname="Samsung 32 inches QLED 4K Smart TV" price="$500.00"/>
              <Product  pimg='https://e-commerce-api-v2.academlo.tech/uploads/p.jpg' company="Sony" pname="BRAVIA 4K HDR Full Array LED" price="$1099.00"/>
              <Product  pimg='https://e-commerce-api-v2.academlo.tech/uploads/j.jpg' company="Apple" pname="2021 Apple MacBook Pro" price="$1300.00"/>
              <Product  pimg='https://e-commerce-api-v2.academlo.tech/uploads/c1.webp' company="Samsung" pname='Samsung 30" 6 Cubic Feet Smart Gas Slide-In Range' price="$799.00"/>
              <Product  pimg='https://e-commerce-api-v2.academlo.tech/uploads/ze.jpg' company="Sony" pname="Sony X85J 55 Inch smart TV" price="$1198.00"/>
              <Product  pimg='https://e-commerce-api-v2.academlo.tech/uploads/zb.webp' company="Xiaomi" pname="Pocophone X3 Pro" price="$275.00"/>
              <Product  pimg='https://e-commerce-api-v2.academlo.tech/uploads/c4.webp' company="Cosmo" pname='30" Electric Range with 7 Function Convection Oven' price="$1599.00"/>
              <Product  pimg='https://e-commerce-api-v2.academlo.tech/uploads/y.jpg' company="Samsung" pname='Samsung 50 inches 4K Ultra HD Smart LED TV' price="$570.00"/>
              <Product  pimg='https://e-commerce-api-v2.academlo.tech/uploads/s.jpg' company="Samsung" pname='SAMSUNG Galaxy Book Pro' price="$1050.00"/>
              <Product  pimg='https://e-commerce-api-v2.academlo.tech/uploads/c10.webp' company="Cosmo" pname='Cosmo EPGR Series 36  Convection Range' price="$2664.00"/>
              <Product  pimg='https://e-commerce-api-v2.academlo.tech/uploads/v.webp' company="Apple" pname='iPhone 13 Pro' price="$1300.00"/>
         


            </section>
          </section>
        </main>

        <footer className="relative pt-12 pb-8 bg-dark-gray text-light-gray max-h-[500px]">
          <div className="mb-4 text-center">
            <h3 className="text-sm sm:text-lg">
              © K <span className="text-sad-yellow"> - Shop</span> 2023 |
              Developed by @Nabil
            </h3>
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <a
              className="text-4xl text-light-gray hover:text-sad-yellow hover:animate-bounce"
              target="_blank"
              href="https://github.com/nabiluddin"
              rel="noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              className="text-4xl text-light-gray hover:text-sad-yellow hover:animate-bounce"
              target="_blank"
              href="https://www.linkedin.com/in/nabiluddin02/"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a
              className="text-4xl text-light-gray hover:text-sad-yellow hover:animate-bounce"
              target="_blank"
              href="https://nabil-porfolio1.netlify.app/"
              rel="noreferrer"
            >
              <i className="bx bxs-user-circle"></i>
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default MainP;
