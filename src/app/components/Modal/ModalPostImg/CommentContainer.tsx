import React from "react";
import Image from "next/image";
import Link from "next/link";
import pausIcon from "../../../assets/Image/paus.svg";
import LoveIcon from "../../../assets/Icon Web/LoveHeart_Icon.svg";
import img7 from "../../../assets/Image/img7.svg";
import SmileIcon from "../../../assets/Icon Web/Smile_Icon.svg";

const CommentContainer = ({ commentsData }) => {
  return (
    <div className="col-span-1 max-w-auto p-3">
      <div className="flex justify-between px-4 py-5 border-b-2">
        <h2 className="font-bold">Comments</h2>
        <Link href="#" passHref>
          <p className="font-bold">X</p>
        </Link>
      </div>
      {commentsData && commentsData.length > 0
        ? commentsData.map((comment, index) => (
            <div key={index} className="mt-4 overflow-y-auto max-h-72">
              {/* User */}
              <div className="flex justify-between overflow-hidden">
                <div className="flex items-center gap-2">
                  <div className="profile-user">
                    <Image
                      src={comment.userimg}
                      alt="user"
                      width={48}
                      height={48}
                      className="border border-1 rounded-full"
                    />
                  </div>
                  <div>
                    <div className="username flex gap-2">
                      <div>
                        <h4 className="font-bold">{comment.name}</h4>
                      </div>
                      <div>
                        <h5 className="text-gray-500">{comment.username}</h5>
                      </div>
                      <div className="rounded-full bg-cyan-300 text-xs w-[73px] h-5 flex items-center justify-center">
                        <Image
                          src={pausIcon}
                          alt="log"
                          width={16}
                          height={16}
                        />
                        <h6 className="text-white">narwhal</h6>
                      </div>
                    </div>
                    <div className="date">
                      <p className="text-xs text-gray-500 text-left">
                        {comment.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-2">
                <p className="text-left">{comment.caption}</p>
              </div>

              {/* Comment */}
              <div className="flex justify-between content-center p-2">
                {/* Left comment section */}
                <div className="flex justify-between gap-5">
                  <div>
                    <Link href="#" passHref>
                      <div className="flex gap-4">
                        <p className="text-gray-500">Reply</p>
                      </div>
                    </Link>
                  </div>
                  <div className="flex gap-2 content-center">
                    <Link href="#" passHref>
                      <div className="flex gap-2">
                        <div className="clearfix">
                          <span className="icon-Up_Stroke_Icon"></span>
                        </div>
                        <p className="text-gray-500">69</p>
                      </div>
                    </Link>
                    <Link href="#" passHref>
                      <div className="flex gap-4">
                        <div className="clearfix">
                          <span className="icon-Down_Stroke_Icon"></span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Right comment section */}
                <div className="flex gap-5">
                  <Link href="#" passHref>
                    <div className="flex gap-2 items-center">
                      <Image src={LoveIcon} alt="love" width={18} height={18} />
                      <p className="text-gray-500">764</p>
                    </div>
                  </Link>
                  <Link href="#" passHref>
                    <div className="flex gap-2 items-center">
                      <div className="flex gap-2 bg-orange-200 w-28 h-7 rounded-2xl justify-center items-center">
                        <div className="clearfix pbs text-lg ">
                          <span className="icon-Gift_Box_Icon">
                            {/* Icon paths */}
                          </span>
                        </div>
                        <p className="text-red-500">Send Gift</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))
        : null}

      {/* Comment Type */}
      <div className="flex justify-between bg-slate-100 content-center items-center rounded-full">
        <div className="flex content-center items-center gap-2">
          <Image src={img7} alt="profile" width={43} height={43} />
          <p>Add Comment...</p>
        </div>
        <div className="flex gap-3 content-center items-center">
          <Link href="#" passHref>
            <div className="clearfix">
              <span className="icon-Tag_addaccount_Icon"></span>
            </div>
          </Link>
          <Link href="#" passHref>
            <Image src={SmileIcon} alt="smileicon" width={24} height={24} />
          </Link>
          <div className="">
            <button
              type="button"
              className="focus:outline-none text-white bg-indigo-500 font-medium w-24 h-8 rounded-full rounded-bl-none text-sm px-5 py-2.5 flex justify-center content-center items-center"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentContainer;
