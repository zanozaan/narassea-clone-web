import React from "react";
import Link from "next/link";
import Image from "next/image";
import chatDotsIcon from "../../../assets/Icon Web/ChatCircleDots.svg";
import arrowB from "../../../assets/Icon Web/Arrow_bot.svg";
import imageIcon from "../../../assets/Icon Web/Image_Icon.svg";
import gifIcon from "../../../assets/Icon Web/GIF_Icon.svg";
import alignleftIcon from "../../../assets/Icon Web/AlignLeft_Icon.svg";
import smileIcon from "../../../assets/Icon Web/Smile_Icon.svg";
import dateIcon from "../../../assets/Icon Web/Date_Icon.svg";
import icon from "../../../assets/Icon Web/icon.svg";
import linkIcon from "../../../assets/Icon Web/Link.svg";

const FooterPost = () => {
  return (
    <div className="">
      <div className="bg-white  flex w-[600px] p-7">
        <div className="flex gap-10">
          <div className="flex gap-2 p-1 bg-slate-100 rounded-lg items-center">
            <Image src={chatDotsIcon} alt="profile" width={24} height={24} />
            <p>Discussion</p>
            <Image src={arrowB} alt="icon" width={24} height={24} />
          </div>
          <div className="flex">
            <Link href="#" className="px-2">
              <Image src={imageIcon} alt="profile" width={26} height={26} />
            </Link>
            <Link href="#" className="px-2">
              <Image src={gifIcon} alt="profile" width={26} height={26} />
            </Link>
            <Link href="#" className="px-2">
              <Image src={alignleftIcon} alt="profile" width={26} height={26} />
            </Link>
            <Link href="#" className="px-2">
              <Image src={smileIcon} alt="profile" width={26} height={26} />
            </Link>
            <Link href="#" className="px-2">
              <Image src={dateIcon} alt="profile" width={26} height={26} />
            </Link>
            <Link href="#" className="px-2">
              <Image src={icon} alt="profile" width={26} height={26} />
            </Link>
            <Link href="#" className="px-2">
              <Image src={linkIcon} alt="profile" width={26} height={26} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPost;
