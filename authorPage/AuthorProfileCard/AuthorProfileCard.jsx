import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./AuthorProfileCard.module.css";
import images from "../../img";
import { Button } from "@/components/component";

const AuthorProfileCard = () => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  //copyAddress function
  const copyAddress = () => {
    const copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  //openShare function
  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };

  const openReport = () => {
    if (!report) {
      setShare(false);
      setReport(true);
    } else {
      setReport(false);
    }
  };

  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_Box}>
        <div className={Style.AuthorProfileCard_Box_Img}>
          <Image
            src={images.nft_image_1}
            className={Style.AuthorProfileCard_Box_Img_Img}
            alt="NFT  IMAGES"
            width={220}
            height={220}
          />
        </div>
        <div className={Style.AuthorProfileCard_Box_Info}>
          <h2>
            Dony Herrera {""}{" "}
            <span>
              <MdVerified />
            </span>{" "}
          </h2>
          <div className={Style.AuthorProfileCard_Box_Info_Address}>
            <input
              type="text"
              value="0x829BD824B03D092203333...A830"
              id="myInput"
            />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfileCard_Box_Info_Address_Icon}
            />
          </div>
          <p>
            Punk #4786 / AN OG Cryptopunk Collector, hoarder of NFTs.
            Contributing to @ether_cards, an NFT Monetization Platform.
          </p>

          <div className={Style.AuthorProfileCard_Box_Info_Social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>
        <div className={Style.AuthorProfileCard_Box_Share}>
          <Button btnName="Follow" handleClick={() => {}} />
          <MdCloudUpload
            onClick={() => openShare()}
            className={Style.AuthorProfileCard_Box_Share_Icon}
          />
          {share && (
            <div className={Style.AuthorProfileCard_Box_Share_Upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>{" "}
                {""}Facebook
              </p>
              <p>
                <span>
                  <TiSocialInstagram />
                </span>{" "}
                {""}Instagram
              </p>
              <p>
                <span>
                  <TiSocialLinkedin />
                </span>{" "}
                {""}LinkedIn
              </p>
              <p>
                <span>
                  <TiSocialYoutube />
                </span>{" "}
                {""}YouTube
              </p>
            </div>
          )}
          <BsThreeDots
            onClick={() => openReport()}
            className={Style.AuthorProfileCard_Box_Share_Icon}
          />
          {report && (
            <p className={Style.AuthorProfileCard_Box_Share_Report}>
              <span>
                <MdOutlineReportProblem />
              </span>{" "}
              {""}
              Report abuse
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
