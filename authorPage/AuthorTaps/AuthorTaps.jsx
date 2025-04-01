import React, { useState } from "react";
import Image from "next/image";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./AuthorTaps.module.css";
import images from "../../img";

const AuthorTaps = ({
  setCollectibles,  // Correctly destructuring setter functions from props
  setCreated,
  setLike,
  setFollower,
  setFollowing,
}) => {
  const [openList, setOpenList] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const openDropDownList = () => {
    if (!openList) {
      setOpenList(true);
    } else {
      setOpenList(false);
    }
  };

  const openTab = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Collectibles") {
      setCollectibles(true);
      setCreated(false);
      setLike(false);
      setFollower(false);
      setFollowing(false);
      setActiveButton(1);
    } else if (btnText == "Created") {
      setCollectibles(false);
      setCreated(true);
      setLike(false);
      setFollower(false);
      setFollowing(false);
      setActiveButton(2);
    } else if (btnText == "Liked") {
      setCollectibles(false);
      setCreated(false);
      setLike(true);
      setFollower(false);
      setFollowing(false);
      setActiveButton(3);
    } else if (btnText == "Following") {
      setCollectibles(false);
      setCreated(false);
      setLike(false);
      setFollower(false);
      setFollowing(true);
      setActiveButton(4);
    } else if (btnText == "Follower") {
      setCollectibles(false);
      setCreated(false);
      setLike(false);
      setFollower(true);
      setFollowing(false);
      setActiveButton(5);
    }
  };
  const listArray = [
    "Most Recent",
    "Most Popular",
    "Most Liked",
    "Most Commented",
  ];

  return (
    <div className={Style.AuthorTaps}>
      <div className={Style.AuthorTaps_Box}>
        <div className={Style.AuthorTaps_Box_Left}>
          <div className={Style.AuthorTaps_Box_Left_Button}>
            <button
              className={'${activeButton === 1 ? Style.active : ""}'}
              onClick={(e) => openTab(e)}
            >
              Collectibles{""}
            </button>
            <button
              className={'${activeButton === 2 ? Style.active : ""}'}
              onClick={(e) => openTab(e)}
            >
              Created{""}
            </button>
            <button
              className={'${activeButton === 3 ? Style.active : ""}'}
              onClick={(e) => openTab(e)}
            >
              Liked{""}
            </button>
            <button
              className={'${activeButton === 4 ? Style.active : ""}'}
              onClick={(e) => openTab(e)}
            >
              Following{""}
            </button>
            <button
              className={'${activeButton === 5 ? Style.active : ""}'}
              onClick={(e) => openTab(e)}
            >
              Followers{""}
            </button>
          </div>
        </div>
        <div className={Style.AuthorTaps_Box_Right}>
          <div
            className={Style.AuthorTaps_Box_Right_Paragraph}
            onClick={() => openDropDownList()}
          >
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>
          {openList && (
            <div className={Style.AuthorTaps_Box_Right_List}>
              {listArray.map((el, i) => (
                <div
                  key={i + 1}
                  onClick={() => {
                    setSelectedMenu(el);
                  }}
                  className={Style.AuthorTaps_Box_Right_List_Item}
                >
                  <p>{el}</p>
                  <span>{selectedMenu === el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;
