import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/Icon Logo/Narrasea_PUTIH_TEXT.svg";
import HomeIcon from "../../assets/Icon Web/Home_Icon2.svg";
import VideoIcon from "../../assets/Icon Web/Video_Icon2.svg";
import MarketIcon from "../../assets/Icon Web/Marketplace_Icon2.svg";
import CommunityIcon from "../../assets/Icon Web/Community_Icon.svg";
import SearchIcon from "../../assets/Icon Web/Search_Icon.svg";
import MessageIcon from "../../assets/Icon Web/ChatCircleDots.svg";
import NotificationIcon from "../../assets/Icon Web/BellSimpleRinging.svg";
import img7 from "../../assets/Image/img7.svg";

const Navbar = () => {
  return (
    <div className=" py-7 bg-white border-[1px] flex justify-evenly content-center items-center sticky top-0 z-20    ">
      {/* LOGO */}
      <Link href="#">
        <Image src={Logo} alt="logo" width={200} height={43} />
      </Link>

      {/* MENU NAVIGATION */}
      <div className="flex justify-between content-center">
        {/* <image src={Home} alt=""/> */}
        <Link href="#" className="pr-[75px] hover:border-b border-indigo-500">
          <Image src={HomeIcon} alt="home" width={32} height={32} />
          {/* <span className="icon-Home_Icon2"></span> */}
        </Link>
        <Link href="#" className="pr-[75px] hover:border-b border-indigo-500">
          <Image src={VideoIcon} alt="video" width={32} height={32} />
        </Link>
        <Link href="#" className="pr-[75px] hover:border-b border-indigo-500">
          <Image src={MarketIcon} alt="market" width={32} height={32} />
        </Link>
        <Link href="#" className="pr-[75px] hover:border-b border-indigo-500">
          <Image src={CommunityIcon} alt="community" width={32} height={32} />
        </Link>
        <Link href="#" className=" hover:border-b border-indigo-500">
          <Image src={SearchIcon} alt="community" width={32} height={32} />
        </Link>
      </div>

      {/* MENU + PROFILE + POST  */}
      <div className="max-w-[570px] flex justify-between content-center items-center">
        {/* POST BUTTON */}
        <div className="pr-[126px]">
          <button
            type="button"
            className="focus:outline-none text-white bg-[#6366F1] font-medium w-[96px] h-[32px] rounded-full rounded-bl-none text-sm px-5 py-2.5 flex justify-center content-center items-center"
          >
            Post
          </button>
        </div>

        {/* MENU + POST */}
        <div className="max-w-[350px] flex justify-center gap-5">
          <Link href="#">
            <Image src={MessageIcon} alt="message" width={24} height={24} />
          </Link>
          <Link href="#">
            <Image
              src={NotificationIcon}
              alt="notification"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#">
            <Image src={img7} alt="profile" width={28} height={28} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
