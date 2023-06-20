import React from "react";

function Product(props) {
  return (
    <div>
    <article className="border-[1px] border-gray-300 rounded-md">
      <div
        className="relative p-4 border-b-[1px] border-gray-300 h-52
            overflow-hidden group"
      >
        <img
          className="h-full w-full object-contain group group-hover:opacity-30 duration-500"
          src={props.pimg}
          alt="Samsung Galaxy S22"
        />
        <a
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-happy-yellow hover:bg-happy-yellow-hover text-header-color font-medium text-lg grid place-items-center rounded-full max-w-max py-3 px-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 hover:scale-110"
          href="/products/1"
        >
          See details
        </a>
      </div>
      <section className="p-4 relative">
        <div className="h-[5rem] overflow-y-auto">
          <h4 className="text-gray-400 font-bold">{props.company}</h4>
          <a
            className="text-xl font-bold hover:underline hover:text-dark-blue"
            title="Samsung Galaxy S22"
            href="/products/1"
          >
            {props.pname}
          </a>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <h4 className="text-gray-400 text-lg font-bold">Price</h4>
          <span className="text-xl ml-2 font-bold text-orange">
            {props.price}
          </span>
        </div>
        <button className="absolute right-3 bottom-2 bg-happy-yellow hover:bg-happy-yellow-hover  text-black  grid place-items-center rounded-full w-[40px] aspect-square hover:scale-110 transition-all">
          <i className="bx bx-cart-alt text-xl"></i>
        </button>
      </section>
    </article>
    </div>
  );
}

export default Product;
