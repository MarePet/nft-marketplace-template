import React from 'react';
import Image from 'next/image';
import { Button } from '../component';

//INTERNAL IMPORT
import Style from './Brand.module.css';
import images from '../../img';

const Brand = () => {
    return (
        <div className={Style.Brand}>
            <div className={Style.Brand_Box}>
                <div className={Style.Brand_Box_Left}>
                    <Image src={images.logo} alt='brand-logo' />
                    <h1>Earn free crypto tokens!</h1>
                    <p>Creative agency that leads and inspires!</p>
                    <div className={Style.Brand_Box_Left_Btn}>
                        <Button btnName='Create' handleClick={() => { }} />
                        <Button btnName='Discover' handleClick={() => { }} />
                    </div>
                </div>
                <div className={Style.Brand_Box_Right}>
                    <Image src={images.earn} className={Style.Brand_Box_Right_Img} alt='brand-logo'/>
                </div>
            </div>
        </div>
    )
}

export default Brand