import React from "react";
import Image from "next/image";
import aside_img1 from "../../assets/Image/aside_img1.svg";
import aside_img2 from "../../assets/Image/aside_img2.svg";
import aside_img3 from "../../assets/Image/aside_img3.svg";
import whotFollow1 from "../../assets/Image/whotFollow1.svg";
import whotFollow2 from "../../assets/Image/whotFollow2.svg";
import VerifiedIcon from "../../assets/Icon Web/Verified_Blue_Icon.svg";
import kepitingIcon from "../../assets/Image/kepiting.svg";

const Aside_left = () => {
  return (
    <div className="hidden xl:block col-span-1 sticky top-0 left-0 h-screen z-0">
      <div className="bg-slate-50 rounded-2xl  p-6">
        {/* Suggest Blog */}
        <div>
          <header>
            <h2 className="font-bold text-lg">{`Narassea's Blog`}</h2>
          </header>
          <div className="container-card py-4 flex flex-col justify-center gap-5">
            <div className="card flex">
              <div className="flex flex-col">
                <div className="flex gap-10">
                  <p className="text-gray-500 text-xs">World</p>
                  <p className="text-gray-500 text-xs">. 1h ago</p>
                </div>
                <div className="title">
                  <h3 className="font-bold text-sm">
                    {`Declining Popularity of NFTs: Here's How Industry Players are Responding`}
                  </h3>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">
                    Trending with
                    <span className="pl-2">
                      <a href="#" className="text-[#1DA1F2]">
                        #nftnews
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <>
                <Image src={aside_img1} alt="img1" width={71} height={69} />
              </>
            </div>
            <div className="card flex">
              <div className="flex flex-col">
                <div className="flex gap-10">
                  <p className="text-gray-500 text-xs">Indonesia</p>
                  <p className="text-gray-500 text-xs">. 1h ago</p>
                </div>
                <div className="title">
                  <h3 className="font-bold  text-sm">
                    {`This is What the CEO of Tokocrypto Says About the Waning Popularity of NFTs.`}
                  </h3>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">
                    Trending with
                    <span className="pl-2">
                      <a href="#" className="text-[#1DA1F2]">
                        #nftnews
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <>
                <Image src={aside_img2} alt="img2" width={71} height={69} />
              </>
            </div>
            <div className="card flex">
              <div className="flex flex-col">
                <div className="flex gap-10">
                  <p className="text-gray-500 text-xs">World</p>
                  <p className="text-gray-500 text-xs">. 1h ago</p>
                </div>
                <div className="title">
                  <h3 className="font-bold  text-sm">
                    {`How the NFT market peaks and bottoms differently from the rest of the industry`}
                  </h3>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">
                    Trending with
                    <span className="pl-2">
                      <a href="#" className="text-[#1DA1F2]">
                        #nftnews
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <>
                <Image src={aside_img3} alt="img3" width={71} height={69} />
              </>
            </div>
            <div>
              <h3 className="text-indigo-500 text-base font-bold">
                <a href="">Show more</a>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Suggest to Follow */}
      <div className="mt-5 bg-slate-50 rounded-2xl  p-2 ">
        <header>
          <h2 className="font-bold text-lg">Who to Follow</h2>
        </header>
        <div className="container-card py-4 flex flex-col justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="profile-user">
                <Image src={whotFollow1} alt="user" width={48} height={48} />
              </div>
              <div>
                <div className="username flex gap-1">
                  <div>
                    <h4 className="font-medium">Marrian Harry</h4>
                  </div>
                  <div className="flex">
                    <div>
                      <Image src={VerifiedIcon} alt="verified" />
                    </div>
                    <div>
                      <Image src={kepitingIcon} alt="icon" />
                    </div>
                  </div>
                </div>
                <div className="date">
                  <p className="text-xs text-gray-500">@marrianharry</p>
                </div>
              </div>
            </div>
            <div className="pl-10">
              <button
                type="button"
                className="focus:outline-none text-white bg-indigo-500 font-medium rounded-full text-sm px-5 py-2.5"
              >
                Follow
              </button>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="profile-user">
                <Image src={whotFollow2} alt="user" width={48} height={48} />
              </div>
              <div>
                <div className="username flex gap-1">
                  <div>
                    <h4 className="font-medium">Aiza nana</h4>
                  </div>
                  <div className="flex">
                    <div>
                      <Image src={VerifiedIcon} alt="verified" />
                    </div>
                    <div>
                      <Image src={kepitingIcon} alt="icon" />
                    </div>
                  </div>
                </div>
                <div className="date">
                  <p className="text-xs text-gray-500">@nanaaiza</p>
                </div>
              </div>
            </div>
            <div className="pl-16">
              <button
                type="button"
                className="focus:outline-none text-white bg-indigo-500 font-medium rounded-full text-sm px-5 py-2.5"
              >
                Follow
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-indigo-500 mt-5 text-base font-bold">
              <a href="">Show more</a>
            </h3>
          </div>
        </div>
      </div>
      {/* ACCESSIBILITY */}
      <div className="grid grid-cols-3">
        <p className="text-sm text-gray-400">
          <a href="#">About</a>
        </p>
        <p className="text-sm text-gray-400 ">
          <a href="#">Accessibility</a>
        </p>
        <p className="text-sm text-gray-400">
          <a href="#">Help Center</a>
        </p>
        <p className="text-sm text-gray-400 col-span-2">
          <a href="#">Privacy and Terms</a>
        </p>
        <p className="text-sm text-gray-400">
          <a href="#">Advertising</a>
        </p>
        <p className="text-sm text-gray-400 col-span-2">
          <a href="#">Business Services</a>
        </p>
      </div>
    </div>
  );
};

export default Aside_left;
