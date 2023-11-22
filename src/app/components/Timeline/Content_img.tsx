import React from "react";
import Image from "next/image";

const Content_img = ({ card }) => {
  return (
    <div className="overflow-hidden">
      {card.img && (
        <div className="content-img">
          <Image src={card.img} alt="content" className="w-full rounded" />
        </div>
      )}
      {/* CAPTION */}
      <div className="desc-img my-4">
        <p>{card.caption}</p>
      </div>
    </div>
  );
};

export default Content_img;
