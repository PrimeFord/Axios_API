import React from "react";

const QuoteCard = (props) => {
  //   const rand = () => {
  //     Math.floor(Math.random() * quote.length);
  //   };
  return (
    <div className="lg:w-[60rem] bg-[#c1c1c173] lg:h-[30rem] p-[3rem] items-center flex flex-col justify-center text-center border-solid border-2 border-black rounded-[1.5rem]">
      <p className="text-[1.6rem]">{`"${props.quote}"`}</p>
      <p className="text-[1.05rem] my-3 italic">{`Author: ${props.character}`}</p>
      {/* <p>{props.character}</p> */}
      {/* <p>{props.anime}</p> */}
      <button
        className="border-solid border-2 text-[1.25rem] px-3 py-1 border-black"
        onClick={props.fetch}
      >
        Generate
      </button>
    </div>
  );
};

export default QuoteCard;
