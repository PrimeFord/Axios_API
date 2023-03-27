import React from "react";

const QuoteCard = (props) => {
  //   const rand = () => {
  //     Math.floor(Math.random() * quote.length);
  //   };
  return (
    <div className="w-[100%] h-[30rem] border-solid border-2 border-black">
      <p>{props.quote}</p>
      <p>{props.character}</p>
      <p>{props.anime}</p>
      <button className="border-solid border-2 border-black">Generate</button>
    </div>
  );
};

export default QuoteCard;
