import React, { useState, useEffect } from 'react'
import {
    BsAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3
} from 'react-icons/bs';

//INTERNAL IMPORT
import Style from './Collection.module.css';
import DaysComponent from './DaysComponents/DaysComponent';
import images from '../../img';

const Collection = () => {
    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const cardArray = [
        {
            background: images.creatorbackground1,
            user: images.user1
        },
        {
            background: images.creatorbackground2,
            user: images.user2
        },
        {
            background: images.creatorbackground3,
            user: images.user3
        },
        {
            background: images.creatorbackground4,
            user: images.user4
        },
        {
            background: images.creatorbackground5,
            user: images.user5
        },
        {
            background: images.creatorbackground6,
            user: images.user6
        },
        {
            background: images.creatorbackground7,
            user: images.user7
        },
        {
            background: images.creatorbackground8,
            user: images.user8
        }
    ];
    const followingArray = [{
        background: images.creatorbackground1,
        user: images.user1
    },
    {
        background: images.creatorbackground4,
        user: images.user4
    },
    {
        background: images.creatorbackground5,
        user: images.user5
    },
    {
        background: images.creatorbackground6,
        user: images.user6
    },
    {
        background: images.creatorbackground2,
        user: images.user2
    },
    {
        background: images.creatorbackground3,
        user: images.user3
    },
    {
        background: images.creatorbackground7,
        user: images.user7
    },
    {
        background: images.creatorbackground8,
        user: images.user8
    }];
    const newsArray = [{
        background: images.creatorbackground1,
        user: images.user1
    },
    {
        background: images.creatorbackground2,
        user: images.user2
    },
    {
        background: images.creatorbackground3,
        user: images.user3
    },
    {
        background: images.creatorbackground6,
        user: images.user6
    },
    {
        background: images.creatorbackground7,
        user: images.user7
    },
    {
        background: images.creatorbackground8,
        user: images.user8
    },
    {
        background: images.creatorbackground4,
        user: images.user4
    },
    {
        background: images.creatorbackground5,
        user: images.user5
    },
    ];

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
                                    <DaysComponent key={i + 1} i = {i} el = {el} />
                                ))}
                        </div>
                    )
                }

                {
                    following && (
                        <div className={Style.Collection_Box}>
                            {
                                followingArray.map((el, i) => (
                                    <DaysComponent key={i + 1} i = {i} el = {el}/>
                                ))}
                        </div>
                    )
                }

                {
                    news && (
                        <div className={Style.Collection_Box}>
                            {
                                newsArray.map((el, i) => (
                                    <DaysComponent key={i + 1} i = {i} el = {el}/>
                                ))}
                        </div>
                    )
                }
            </div>
    )
}

export default Collection