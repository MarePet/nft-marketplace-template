import React from 'react'
import Image from "next/image"
import { BsCircleFill } from 'react-icons/bs'

//INTERNAL IMPORT

import Style from "./Category.module.css"
import images from "../../img"

const Category = () => {
  const CategoryArray = [1, 2, 3, 4, 5,6];
  return (
    <div className={Style.Box_Category}>
      <div className={Style.Category}>
        {CategoryArray.map((el, i) =>
        (
          <div className={Style.Category_Box} key={i + 1}>
            <Image src={images.creatorbackground1}
              className={Style.Category_Box_Img}
              alt='Bacground Image'
              objectFit='cover'
              width={100}
              height={100}
            />
            <div className={Style.Category_Box_Title}>
              <span><BsCircleFill /></span>
              <div className={Style.Category_Box_Title_Info}>
                <h4>Entertainment</h4>
                <small>1995 NFT</small>
              </div>
            </div>
          </div>
        )
        )}
      </div>
    </div>

  )
}

export default Category