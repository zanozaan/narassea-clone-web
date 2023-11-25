import React from "react";
import Header from "./Header";
import Content_img from "./Content_img";
import Comment from "./Comment";
import mobil from "../../assets/Image/mobil.svg";
import nft from "../../assets/Image/nft.svg";
import steven from "../../assets/Image/steven.svg";
import sabrina from "../../assets/Image/sabrina.svg";
import sabrina2 from "../../assets/Image/sabrina2.svg";
import shakira from "../../assets/Image/shakira.svg";
import jayson from "../../assets/Image/jayson.svg";
import kathrine from "../../assets/Image/kathrine.svg";
import rumah from "../../assets/Image/rumah.svg";

const Timeline = () => {
  const cards = [
    {
      id: 1,
      userimg: steven,
      name: "Steven David",
      username: "@stevendavid",
      img: mobil,
      caption: `Once upon a time, on a peaceful suburban street, a heartwarming scene unfolded. As the sun dipped below the horizon, casting a warm, golden glow on the neighborhood, a tiny, adorable kitten appeared in front of a parked car. This little ball of fur was no ordinary ...`,
      comments: [{ comment: 24, repost: 11, love: 523, insight: "15.1k" }],
    },
    {
      id: 2,
      userimg: sabrina,
      name: "Sabrina Anna",
      username: "@sabrinaanna",
      img: nft,
      caption: `BIG NEWS! \n
        We're thrilled to announce that Yosu will be launching on the
@vtopiaio\n
Launchpad on October 18th! \n
Mark your calendars...\n
Play, earn, and conquer in our gamified rewards! `,
      comments: [{ comment: 22, repost: 21, love: 425, insight: "16.5k" }],
    },
    {
      id: 3,
      userimg: shakira,
      name: "Andrea Shakira",
      username: "@shakiraaaa",
      caption: `Do you think this NFT trend will continue or is it just temporary? What 
        factors could influence the future of NFTs?`,
      comments: [{ comment: 26, repost: 15, love: 764, insight: "22.7k" }],
    },
    {
      id: 4,
      userimg: sabrina2,
      name: "Sabrina Anna",
      username: "@sabrinaanna",
      img: rumah,
      caption: `Make your mark in the digital world with our exclusive NFT collection. Our 
        carefully curated selection of non-fungible tokens offers a gateway to a realm 
        of unparalleled creativity and uniqueness. Each NFT in our collection represents 
        a digital masterpiece, a moment frozen in time, or a piece of virtual real estate 
        waiting to be owned.`,
      comments: [{ comment: 66, repost: 36, love: 843, insight: "53.8k" }],
    },
    {
      id: 5,
      userimg: jayson,
      name: "Charly Jayson",
      username: "@jayyson22",
      caption: `How do you see the role of NFTs in digital art? Will this change how 
        artists interact with the art market?`,
      comments: [{ comment: 252, repost: 64, love: 7533, insight: "24.7k" }],
    },
    {
      id: 6,
      userimg: kathrine,
      name: "Kathrine Nuna",
      username: "@kathrinenuna",
      caption: `How do you see the role of NFTs in digital art? Will this change how 
        artists interact with the art market?`,
      comments: [{ comment: 512, repost: 374, love: 4745, insight: "52.2k" }],
    },
  ];

  return (
    <div className="lg:col-span-2 border-x-2 py-6 px-4 xs:col-span-2 overflow-hidden xs:mb-14">
      {cards.map((card) => (
        <div key={card.id} className="py-2">
          <Header card={card} />
          <Content_img card={card} />
          <Comment card={card} />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
