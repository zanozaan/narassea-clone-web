import React from "react";
import Link from "next/link";
import Image from "next/image";
import pausIcon from "../../assets/Image/paus.svg";
import dotsHIcon from "../../assets/Icon Web/Dots_H.svg";

const Header = ({ card }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2 mb-4">
        <div className="profile-user">
          <Image
            src={card.userimg}
            alt="user"
            width={48}
            height={48}
            className="border border-1 rounded-full"
          />
        </div>
        <div>
          <div className="username flex gap-2">
            <div>
              <h4 className="font-bold">{card.name}</h4>
            </div>
            <div>
              <h5 className="text-gray-500">{card.username}</h5>
            </div>
            <div className="rounded-full bg-cyan-300 text-xs w-[73px] h-5 flex items-center justify-center">
              <Image src={pausIcon} alt="log" />
              <h6 className="text-white">narwhal</h6>
            </div>
          </div>
          <div className="date">
            <p className="text-xs text-gray-500">September 02 2023, 03:04pm</p>
          </div>
        </div>
      </div>
      <div>
        <Link href="#">
          <Image src={dotsHIcon} alt="dotsH" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
