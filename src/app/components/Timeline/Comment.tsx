import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CommentIcon from "../../assets/Icon Web/Comment_Icon.svg";
import RepostIcon from "../../assets/Icon Web/Repeat_Icon.svg";
import LoveIcon from "../../assets/Icon Web/LoveHeart_Icon.svg";
import ChartIcon from "../../assets/Icon Web/View_Chart_Icon.svg";
import GiftBox from "../../assets/Icon Web/Gift_Box_Icon.svg";

const Comment = () => {
  return (
    <div>
    <div>
        <div className="flex justify-between content-center">
          <div>
            <Link href="#" className='flex gap-2'>
              <Image src={CommentIcon} alt="comment" width={18} height={18} />
              <p className='text-[#5B7083]'>24</p>
            </Link>
          </div>
          <div>
            <Link href="#" className='flex gap-2'>
              <Image src={RepostIcon} alt="repost" width={18} height={18} />
              <p className='text-[#5B7083]'>11</p>
            </Link>
          </div>
          <div>
            <Link href="#" className='flex gap-2'>
              <Image src={LoveIcon} alt="love" width={18} height={18} />
              <p className='text-[#5B7083]'>523</p>
            </Link>
          </div>
          <div>
            <Link href="#" className='flex gap-2'>
              <Image src={ChartIcon} alt="chart" width={18} height={18} />
              <p className='text-[#5B7083]'>15.1k</p>
            </Link>
          </div>
          <div>
            <Link href="#">
              <div className="flex gap-2 bg-[#FFF9C4] w-[118px] h-[30px] rounded-[20px] justify-center items-center">
                <Image src={GiftBox} alt="box" width={18} height={18} />
                <p className='text-[#DC0C55]'>Send Gift</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Comment