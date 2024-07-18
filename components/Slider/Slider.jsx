import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';


//INTERNAL IMPORT
import Style from './Slider.module.css';
import { SliderCard } from './SliderCard/SliderCard';

const Slider = () => {
    const sliderArray = [1, 2, 3, 4, 5, 6];
    const [width, setWidth] = useState(0);
    const dragSlider = useRef();

    useEffect(() => {
        setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    });

    const handleScroll = (direction) => {
        const { current } = dragSlider;
        const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

        if (direction == "left") {
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className={Style.Slider}>
            <div className={Style.Slider_Box}>
                <h2>Explore Video NFTs</h2>
                <div className={Style.Slider_Box_Btn}>
                    <p>Click on play icon & enjoy</p>
                    <div className={Style.Slider_Box_Btn}>
                        <div className={Style.Slider_Box_Btn_Icon} onClick={() => handleScroll("left")}>
                            <TiArrowLeftThick />
                        </div>
                        <div className={Style.Slider_Box_Btn_Icon} onClick={() => handleScroll("right")}>
                            <TiArrowRightThick />
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    <motion.div className={Style.Slider_Box_Items} ref={dragSlider}>
                        <motion.div ref={dragSlider} className={Style.Slider_Box_Item} drag="x" dragConstraints={{ right: 0, left: -width }}>
                            {
                                sliderArray.map((el, i) => (
                                    <SliderCard key={i + 1} el={el} i={i} />
                                ))
                            }
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Slider