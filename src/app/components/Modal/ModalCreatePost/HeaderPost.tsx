import React from "react";
import Link from "next/link";
import Image from "next/image";
import Big_size from "../../../assets/Icon Web/Big_size.svg";
import Close_icon from "../../../assets/Icon Web/Close_Icon.svg";

const HeaderPost = () => {
  return (
    <div className="bg-white flex justify-between w-[600px] p-7">
      <div>
        <h1 className="font-bold text-lg">Create Post</h1>
      </div>
      <div className="flex">
        <Link href="#" className="px-2">
          <Image src={Big_size} alt="profile" width={24} height={24} />
        </Link>
        <Link href="#" className="px-2">
          <Image src={Close_icon} alt="profile" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

export default HeaderPost;
