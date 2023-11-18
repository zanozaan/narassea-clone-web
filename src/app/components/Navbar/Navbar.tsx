import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/Icon Logo/Narrasea_PUTIH_TEXT.svg";
import SearchIcon from "../../assets/Icon Web/Search_Icon.svg";
import img7 from "../../assets/Image/img7.svg";

const Navbar = () => {
  return (
    // flex justify-evenly content-center items-center
    <div className="grid grid-cols-3 gap-4 px-72 py-6 bg-white border-b sticky top-0 z-1">
      {/* LOGO */}
      <Link href="#" className="">
        <Image src={Logo} alt="logo" width={200} height={43} />
      </Link>

      {/* MENU NAVIGATION */}
      <div className="">
        <ul className="flex justify-between">
          <li>
            <Link href="#">
              <div className="clearfix pbs text-3xl">
                <span className="icon-Home_Icon1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="clearfix pbs text-3xl">
                <span className="icon-Video_Icon2"></span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="clearfix pbs text-3xl">
                <span className="icon-Marketplace_Icon2"></span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="clearfix pbs text-3xl">
                <span className="icon-Community_Icon"></span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#" className="border-indigo-500">
              <Image src={SearchIcon} alt="community" width={32} height={32} />
            </Link>
          </li>
        </ul>
      </div>

      {/* MENU + PROFILE + POST  */}
      <div className="flex justify-between">
        {/* POST BUTTON */}
        <div className="pl-32">
          <button
            type="button"
            className="focus:outline-none text-white bg-indigo-500 font-medium w-24 h-[32px] rounded-full rounded-bl-none text-sm px-5 py-2.5 flex justify-center content-center items-center"
          >
            Post
          </button>
        </div>

        {/* MENU + POST */}
        <div className=" flex justify-center gap-5">
          <Link href="#">
            {/* <Image src={MessageIcon} alt="message" width={24} height={24} /> */}
            <div className="clearfix pbs text-2xl">
              <span className="icon-ChatCircleDots"></span>
            </div>
          </Link>
          <Link href="#">
            <div className="clearfix pbs text-2xl">
              <span className="icon-BellSimpleRinging"></span>
            </div>
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
