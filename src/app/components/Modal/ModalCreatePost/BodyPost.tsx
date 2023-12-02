import React from "react";
import Link from "next/link";
import Image from "next/image";
import img7 from "../../../assets/Image/img7.svg";
import globe from "../../../assets/Icon Web/Public Globe_Icon.svg";
import arrowB from "../../../assets/Icon Web/Arrow_bot.svg";
import boldIcon from "../../../assets/Icon Web/TextBolder_Icon.svg";
import italicIcon from "../../../assets/Icon Web/TextItalic_Icon.svg";
import underlineIcon from "../../../assets/Icon Web/TextUnderline_Icon.svg";
import alignleftIcon from "../../../assets/Icon Web/TextAlignLeft_Icon.svg";
import aligncenterIcon from "../../../assets/Icon Web/TextAlignCenter_Icon.svg";
import alignrightIcon from "../../../assets/Icon Web/TextAlignRight.svg";
import listnumberIcon from "../../../assets/Icon Web/ListNumbers_Icon.svg";
import listdotsIcon from "../../../assets/Icon Web/List_Dots_Icon.svg";

const BodyPost = () => {
  return (
    <div className="border-y-2">
      <div className="bg-white flex flex-col justify-between w-[600px] p-7">
        {/* Menu */}
        <div className="flex justify-between gap-10 items-center">
          <div className="flex">
            <Link href="#" className="px-2">
              <Image src={img7} alt="profile" width={48} height={48} />
            </Link>
            <div className="flex gap-2 p-1 bg-slate-100 rounded-lg items-center">
              <Image src={globe} alt="icon" width={24} height={24} />
              <p>Public</p>
              <Image src={arrowB} alt="icon" width={24} height={24} />
            </div>
          </div>
          <div className="flex">
            <Link href="#" className="">
              <Image src={boldIcon} alt="profile" width={32} height={32} />
            </Link>
            <Link href="#" className="">
              <Image src={italicIcon} alt="profile" width={32} height={32} />
            </Link>
            <Link href="#" className="">
              <Image src={underlineIcon} alt="profile" width={32} height={32} />
            </Link>
          </div>
          <div className="flex">
            <Link href="#" className="">
              <Image src={alignleftIcon} alt="profile" width={32} height={32} />
            </Link>
            <Link href="#" className="">
              <Image
                src={aligncenterIcon}
                alt="profile"
                width={32}
                height={32}
              />
            </Link>
            <Link href="#" className="">
              <Image
                src={alignrightIcon}
                alt="profile"
                width={32}
                height={32}
              />
            </Link>
          </div>
          <div className="flex">
            <Link href="#" className="">
              <Image
                src={listnumberIcon}
                alt="listnum"
                width={32}
                height={32}
              />
            </Link>
            <Link href="#" className="">
              <Image src={listdotsIcon} alt="listdots" width={32} height={32} />
            </Link>
          </div>
        </div>
        <div className="py-5 h-[100px]">
          <p className="text-xl text-gray-500">What would you like to say?</p>
        </div>
      </div>
    </div>
  );
};

export default BodyPost;
