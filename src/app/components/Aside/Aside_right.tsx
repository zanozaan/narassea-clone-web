import React from "react";
import Image from "next/image";
import Link from "next/link";
import VerifiedIcon from "../../assets/Icon Web/Verified_Blue_Icon.svg";
import CommentIcon from "../../assets/Icon Web/Comment_Icon.svg";
import LoveIcon from "../../assets/Icon Web/LoveHeart_Icon.svg";
import asideR_img1 from "../../assets/Image/asideR_img1.svg";
import asideR_img2 from "../../assets/Image/asideR_img2.svg";
import kepitingIcon from "../../assets/Image/kepiting.svg";
import DotsVIcon from "../../assets/Icon Web/Dots_V.svg";

const Aside_right = () => {
  return (
    <div className="col-span-1 sticky top-0 right-0 h-screen">
      {/* Suggested Trends */}
      <div>
        <div className="bg-slate-50 rounded-2xl p-6">
          <header>
            <h2 className="font-bold text-lg">Trends for you</h2>
          </header>
          <div className="container-card py-4 flex flex-col gap-5">
            <div className="flex justify-between">
              <div className="card flex flex-col gap-1">
                <div className="flex gap-10">
                  <p className="text-gray-500 text-xs">Trending in World</p>
                </div>
                <div className="title">
                  <h3 className="font-bold">#DEFiNFTs</h3>
                </div>
                <>
                  <p className="text-gray-500 text-xs">1,357,255 Tweets</p>
                </>
              </div>
              <div>
                <Link href="#">
                  <Image src={DotsVIcon} alt="dotsV" />
                </Link>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="card flex flex-col gap-1">
                <div className="flex gap-10">
                  <p className="text-gray-500 text-xs">Trending in World</p>
                </div>
                <div className="title">
                  <h3 className="font-bold">NFT Art Boom</h3>
                </div>
                <>
                  <p className="text-gray-500 text-xs">925,523 Tweets</p>
                </>
              </div>
              <div>
                <Link href="#">
                  <Image src={DotsVIcon} alt="dotsV" />
                </Link>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="card flex flex-col gap-1">
                <div className="flex gap-10">
                  <p className="text-gray-500 text-xs">Trending in Indonesia</p>
                </div>
                <div className="title">
                  <h3 className="font-bold">Al Ghozali</h3>
                </div>
                <>
                  <p className="text-gray-500 text-xs">743,856 Tweets</p>
                </>
              </div>
              <div>
                <Link href="#">
                  <Image src={DotsVIcon} alt="dotsV" />
                </Link>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="card flex flex-col gap-1">
                <div className="flex gap-10">
                  <p className="text-gray-500 text-xs">Trending in Indonesia</p>
                </div>
                <div className="title">
                  <h3 className="font-bold">Whales vs Sharks</h3>
                </div>
                <>
                  <p className="text-gray-500 text-xs">734,854 Tweets</p>
                </>
              </div>
              <div>
                <Link href="#">
                  <Image src={DotsVIcon} alt="dotsV" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-indigo-500 text-base font-bold">
                <a href="">Show more</a>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Suggest Top Community Post*/}
      <div className="mt-5 bg-slate-50 rounded-2xl w-97 p-6">
        <header>
          <h2 className="font-bold text-lg">Top Community Post</h2>
        </header>
        <div className="container-card py-4 justify-center">
          <div className="flex flex-col gap-2 mb-5">
            {/* User */}
            <div className="flex gap-2">
              <div className="profile-user">
                <Image src={asideR_img1} alt="user" width={48} height={48} />
              </div>
              <div>
                <div className="username flex gap-2">
                  <div>
                    <h4 className="font-medium">Vladivas Flower</h4>
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
                  <p className="text-xs text-gray-500">@flower-via</p>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div>
              <p>
                Own Assets in Games: Become the owner of rare assets in your
                favorite video games. Play games while building your NFT
                portfolio.
              </p>
            </div>
            {/* Comment */}
            <div className="flex justify-start content-center gap-5">
              <div>
                <Link href="#" className="flex gap-2">
                  <Image src={LoveIcon} alt="love" width={18} height={18} />
                  <p className="text-gray-500">523</p>
                </Link>
              </div>
              <div>
                <Link href="#" className="flex gap-2">
                  <Image
                    src={CommentIcon}
                    alt="comment"
                    width={18}
                    height={18}
                  />
                  <p className="text-gray-500">24</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {/* User */}
            <div className="flex gap-2">
              <div className="profile-user">
                <Image src={asideR_img2} alt="user" width={48} height={48} />
              </div>
              <div>
                <div className="username flex gap-2">
                  <div>
                    <h4 className="font-medium">Amir Fauzi</h4>
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
                  <p className="text-xs text-gray-500">@amirfauzi</p>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div>
              <p>
                {`Support Artists: Help the artists you love by 
                purchasing their NFTs. It's an incredible new 
                way to support creativity.`}
              </p>
            </div>
            {/* Comment */}
            <div className="flex justify-start content-center gap-5">
              <div>
                <Link href="#" className="flex gap-2">
                  <Image src={LoveIcon} alt="love" width={18} height={18} />
                  <p className="text-gray-500">852</p>
                </Link>
              </div>
              <div>
                <Link href="#" className="flex gap-2">
                  <Image
                    src={CommentIcon}
                    alt="comment"
                    width={18}
                    height={18}
                  />
                  <p className="text-gray-500">77</p>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-indigo-500 mt-5 text-base font-bold">
              <a href="">Show more</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside_right;
