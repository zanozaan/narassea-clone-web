import React from "react";
import Link from "next/link";
import Image from "next/image";
import infoIcon from "../../../assets/Icon Web/Info_Icon.svg";
import Close_icon from "../../../assets/Icon Web/Close_Icon.svg";

const BodyCart = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center flex-col"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="h-2/4">
        <div className="bg-white flex items-center border-b-2 p-5">
          <div className=" flex w-[600px]">
            <h1 className="font-bold text-lg ">Your Cart</h1>
            <Link href="#" className="px-2">
              <Image src={infoIcon} alt="profile" width={24} height={24} />
            </Link>
          </div>
          <div className="flex">
            <Link href="#" className="px-2">
              <Image src={Close_icon} alt="profile" width={24} height={24} />
            </Link>
          </div>
        </div>
        <div className="h-2/4 bg-white p-5 justify-center items-center">
          <p className="text-bold">Add items to get started.</p>
        </div>
      </div>
    </div>
  );
};

export default BodyCart;
