import React, { useState, useEffect } from 'react'
import {
    BsAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3
} from 'react-icons/bs';

//INTERNAL IMPORT
import Style from './Collection.module.css';
import DaysComponent from './DaysComponents/DaysComponent';

const Collection = () => {
    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const cardArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const followingArray = [1, 2, 3, 4];
    const newsArray = [1, 2, 3, 4, 5, 6];

    const openPopular = () => {
        if (!popular) {
            setPopular(true);
            setFollowing(false);
            setNews(false);
        }
    }

    const openFollower = () => {
        if (!following) {
            setPopular(false);
            setFollowing(true);
            setNews(false);
        }
    }

    const openNews = () => {
        if (!news) {
            setPopular(false);
            setFollowing(false);
            setNews(true);
        }
    }

    return (
        <div className={Style.Collection}>
            <div className={Style.Collection_Title}>
                <h2>Top list of creators</h2>
                <div className={Style.Collection_Collections}>
                    <div className={Style.Collection_Collections_Btn}>
                        <button onClick={() => openPopular()}>
                            <BsAlarmFill /> Last 24 hours
                        </button>
                        <button onClick={() => openFollower()}>
                            <BsCalendar3 /> Last 7 days
                        </button>
                        <button onClick={() => openNews()}>
                            <BsFillCalendarDateFill /> Last 30 days
                        </button>
                    </div>
                </div>
            </div>
                {
                    popular && (
                        <div className={Style.Collection_Box}>
                            {
                                cardArray.map((el, i) => (
                                    <DaysComponent key={i + 1} />
                                ))}
                        </div>
                    )
                }

                {
                    following && (
                        <div className={Style.Collection_Box}>
                            {
                                followingArray.map((el, i) => (
                                    <DaysComponent key={i + 1} />
                                ))}
                        </div>
                    )
                }

                {
                    news && (
                        <div className={Style.Collection_Box}>
                            {
                                newsArray.map((el, i) => (
                                    <DaysComponent key={i + 1} />
                                ))}
                        </div>
                    )
                }
            </div>
    )
}

export default Collection