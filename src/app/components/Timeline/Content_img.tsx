import React from "react";
import Image from "next/image";

const Content_img = ({ card }) => {
  return (
    <div className="">
      {card.img && (
        <div className="content-img">
          <Image src={card.img} alt="content" className="object-contain" />
        </div>
      )}
      {/* CAPTION */}
      <div className="desc-img my-4 max-w-[83%]">
        <h6>{`Title: "The Adorable Encounter"`}</h6>
        <p>{card.caption}</p>
      </div>
    </div>
  );
};

export default Content_img;
