import React from 'react'
import Image from 'next/image'
import mobilImg from "../../assets/Image/mobil.svg"

const Content_img = () => {
  return (
<div className=''>
  <div className=" w-auto h-auto">
    <div className="content-img ">
      <Image className='object-contain' src={mobilImg} alt="content"/>
    </div>
  {/* CAPTION */}
  <div className="desc-img my-4">
    <h6>{`
      Title: "The Adorable Encounter"`}</h6>
    <p>
      Once upon a time, on a peaceful suburban street, a heartwarming scene 
      unfolded. As the sun dipped below the horizon, casting a warm, golden glow on 
      the neighborhood, a tiny, adorable kitten appeared in front of a parked car. This 
      little ball of fur was no ordinary ... <b>more</b>
    </p>
  </div>
  </div>
</div>
  )
}

export default Content_img