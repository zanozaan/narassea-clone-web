import React from "react";
import Image from "next/image";
import Link from "next/link";
import pausIcon from "../../../assets/Image/paus.svg";
import dotsHIcon from "../../../assets/Icon Web/Dots_H.svg";
import LoveIcon from "../../../assets/Icon Web/LoveHeart_Icon.svg";
import RepostIcon from "../../../assets/Icon Web/Repeat_Icon.svg";

const PostCard = ({ card }) => {
  return (
    <div className="col-span-2 max-w-auto border-r-2">
      {/* HEADER */}
      <div className="flex justify-between px-3 py-5">
        <div className="flex items-center gap-2">
          <div className="profile-user gap-2">
            <Image src={card.userimg} alt="user" width={48} height={48} />
          </div>
          <div>
            <div className="username flex gap-2">
              <div>
                <h4 className="font-bold">{card.name}</h4>
              </div>
              <div>
                <h5 className="text-gray-500">{card.username}</h5>
              </div>
              <div className="rounded-full bg-cyan-300 text-xs w-20 h-5 flex items-center justify-center">
                <Image src={pausIcon} alt="log" />
                <h6 className="text-white">narwhal</h6>
              </div>
            </div>
            <div className="date">
              <p className="text-xs text-gray-500 text-left">{card.date}</p>
            </div>
          </div>
        </div>
        <div>
          <Link href="#">
            <Image src={dotsHIcon} alt="dotsH" />
          </Link>
        </div>
      </div>
      {/* IMG POST */}
      <div className="overflow-hidden">
        {card.img && (
          <div className="content-img">
            <Image src={card.img} alt="content" className="w-full rounded" />
          </div>
        )}
        {/* CAPTION POST*/}
        <div className="desc-img my-4 mx-2">
          <p className="text-left">{card.caption}</p>
        </div>
      </div>
      {/* Comment POST */}
      <div className="flex justify-between items-center px-5">
        <Link href="#" className="flex gap-2 items-center mt-2">
          <div className="clearfix pbs text-lg ">
            <span className="icon-Comment_Icon">24</span>
          </div>
          <p className="text-gray-500"></p>
        </Link>
        <Link href="#" className="flex gap-2 items-center">
          <Image src={RepostIcon} alt="repost" width={18} height={18} />
          <p className="text-gray-500">11</p>
        </Link>
        <Link href="#" className="flex gap-2 items-center">
          <Image src={LoveIcon} alt="love" width={18} height={18} />
          <p className="text-gray-500">523</p>
        </Link>
        <Link href="#" className="flex gap-2 items-center">
          <div className="clearfix pbs text-lg ">
            <span className="icon-View_Chart_Icon"></span>
          </div>
          <p className="text-gray-500">64</p>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
