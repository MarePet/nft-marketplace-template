import React, { useState, useEffect } from "react";

//INTERNAL IMPORT
import Style from "../styles/author.module.css";
import { Banner, NFTCardCollPage } from "@/collectionPage/collectionIndex";
import { Brand, Title } from "@/components/component";
import images from "../img";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox
} from "@/authorPage/componentIndex";
import FollowerTabCard from "@/components/FollowerTab/FollowerTabCard/FollowerTabCard";

const author = () => {
  const popularArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
    images.user6,
    images.user7,
    images.user8,
  ];

  const [collectibles, setCollectibles] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);
  return (
    <div>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard />
      <AuthorTaps
        setCollectibles={setCollectibles} 
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

      <AuthorNFTCardBox  />
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NFT music."
      />
      {popularArray.map((el, i) => (
        <FollowerTabCard key={i + 1} i={i} el={el} />
      ))}
      <Brand />
    </div>
  );
};

export default author;
