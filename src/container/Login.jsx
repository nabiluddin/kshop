import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div >
      <section className="grid grid-rows-[auto_1fr] min-h-screen font-Yantramanav">
        <section className="fixed top-0 left-0 right-0 h-[60px] z-20 flex items-center justify-between text-white bg-[#131921] shadow-sm shadow-dark-gray/70">
          <Link to="/" className="text-2xl xs:text-3xl ml-6 md:ml-8 md:text-3xl">
            <h1 className="font-bold">
              K<span className="text-sad-yellow"> - Shop</span>
            </h1>
          </Link>
          <nav className="h-full grid grid-cols-3">
            <Link
              to="/login"
              className="px-3 xs:px-6 text-2xl flex justify-center items-center gap-3 xs:border-x-[1px] border-gray-300"
            >
              <i className="bx bx-user"></i>
              <h2 className="hidden lg:block text-lg">User</h2>
            </Link>
            <Link
              to="/purchases"
              className="px-3 xs:px-6 text-2xl flex justify-center items-center gap-3 xs:border-x-[1px] border-gray-300"
            >
              <i className="bx bx-purchase-tag"></i>
              <h2 className="hidden lg:block text-lg">Purchases</h2>
            </Link>
            <button
              className="px-3 xs:px-6 text-2xl flex gap-3 items-center justify-center xs:border-x-[1px] border-gray-300"
            >
              <i className="bx bx-cart"></i>
              <h2 className="hidden lg:block text-lg">Cart</h2>
            </button>
          </nav>
        </section>
        <main className="bg-gray-100 mt-[60px] min-h-[calc(100vh_-_220px)] grid place-content-center px-2">
          <form className="bg-white p-4 rounded-md max-w-[360px] grid gap-6">
            <h2 className="text-3xl text-center font-500 text-dark-blue">Welcome! </h2>
            <h3 className="text-xl text-center font-500 text-dark-gray">
              Enter your email and password to continue
            </h3>
            <section className="bg-light-gray p-4">
              <h3 className="text-center font-bold">Test data</h3>
              <div className="flex gap-2 items-center">
                <i className="bx bx-envelope text-xl"></i>
                <span>john@gmail.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <i className="bx bx-lock-alt text-xl"></i>
                <span>john1234</span>
              </div>
            </section>
            <div className="grid gap-1">
              <label htmlFor="email">Email</label>
              <input
                className="border-[1px] border-gray-300 p-1 outline-none"
                id="email"
                type="email"
                name="email"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="password">Password</label>
              <input
                className="border-[1px] border-gray-300 p-1 outline-none"
                id="password"
                type="password"
                name="password"
              />
            </div>
            <button className="block w-full py-2 bg-happy-yellow hover:bg-happy-yellow-hover text-header-color text-bold transition-colors">
              Login
            </button>
            <span className="text-sm mx-auto flex gap-1">
              Don't have an account?
              <Link to="/signup" className="text-light-blue hover:underline">
                Sign up
              </Link>
            </span>
          </form>
        </main>
        <section className="fixed top-0 -right-full bg-white pt-[90px] h-screen w-[300px] md:w-[400px] shadow-xl duration-200 p-3 grid grid-rows-[auto_1fr_auto] z-10">
          <h2 className="text-xl font-bold">Shopping cart</h2>
          <article className="mt-4 border-[1px] border-gray-300 rounded-md flex gap-2 items-center h-20 p-2">
            <i className="bx bx-sad text-6xl text-sad-yellow"></i>
            <h4 className="text-sm text-light-blue">There are no products in the cart</h4>
          </article>
          <section className="grid grid-cols-2 py-10 border-t-[1px] border-gray-400">
            <span>Total</span>
            <h4 className="text-end font-bold text-orange text-xl">$0.00</h4>
            <button className="w-full bg-happy-yellow hover:bg-happy-yellow-hover transition-colors py-2 text-header-color font-semibold rounded-md mt-6 col-span-2">
              Checkout
            </button>
          </section>
        </section>
        <footer className="relative pt-12 pb-8 bg-dark-gray text-light-gray max-h-[500px]">
          <div className="mb-4 text-center">
            <h3 className="text-sm sm:text-lg">
              © K <span className="text-sad-yellow"> - Shop</span> 2023 | Developed by @Nabil
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

export default Login;
