import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentIcon from "../../assets/Icon Web/Comment_Icon.svg";
import RepostIcon from "../../assets/Icon Web/Repeat_Icon.svg";
import LoveIcon from "../../assets/Icon Web/LoveHeart_Icon.svg";
import ChartIcon from "../../assets/Icon Web/View_Chart_Icon.svg";
import GiftBox from "../../assets/Icon Web/Gift_Box_Icon.svg";

const Comment = ({ card }) => {
  return (
    <>
      <div className="sm:box-content">
        <div className="flex justify-evenly content-center">
          {card.comments.map((comment, index) => (
            <div key={index} className="flex gap-x-16">
              <Link href="#" className="flex gap-2">
                <div className="clearfix pbs text-lg items-center">
                  <span className="icon-Comment_Icon"></span>
                </div>
                <p className="text-gray-500">{comment.comment}</p>
              </Link>
              <Link href="#" className="flex gap-2 items-center">
                <Image src={RepostIcon} alt="repost" width={18} height={18} />
                <p className="text-gray-500">{comment.repost}</p>
              </Link>
              <Link href="#" className="flex gap-2 items-center">
                <Image src={LoveIcon} alt="love" width={18} height={18} />
                <p className="text-gray-500">{comment.love}</p>
              </Link>
              <Link href="#" className="flex gap-2">
                <div className="clearfix pbs text-lg items-center">
                  <span className="icon-View_Chart_Icon"></span>
                </div>
                <p className="text-gray-500">{comment.insight}</p>
              </Link>
              <Link href="#">
                <div className="flex gap-2 bg-orange-200 w-28 h-7 rounded-2xl justify-center ">
                  <div className="clearfix pbs text-lg items-center">
                    <span className="icon-Gift_Box_Icon">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                      <span className="path5"></span>
                      <span className="path6"></span>
                      <span className="path7"></span>
                      <span className="path8"></span>
                      <span className="path9"></span>
                      <span className="path10"></span>
                      <span className="path11"></span>
                      <span className="path12"></span>
                      <span className="path13"></span>
                      <span className="path14"></span>
                      <span className="path15"></span>
                      <span className="path16"></span>
                      <span className="path17"></span>
                      <span className="path18"></span>
                      <span className="path19"></span>
                      <span className="path20"></span>
                      <span className="path21"></span>
                      <span className="path22"></span>
                      <span className="path23"></span>
                      <span className="path24"></span>
                      <span className="path25"></span>
                      <span className="path26"></span>
                      <span className="path27"></span>
                    </span>
                  </div>
                  <p className="text-red-500">Send Gift</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comment;
