import React from 'react';
import { useState, useEffect } from 'react';
import {
    RiUserFollowFill,
    RiUserUnfollowFill,
    RiAwardLine
} from 'react-icons/ri';



//INTERNAL IMPORT
import Style from './FollowerTab.module.css';
import FollowerTabCard from './FollowerTabCard/FollowerTabCard';

const FollowerTab = () => {
    const CardArray = [1,2,3,4,5,6,7,8];
    const FollowingArray=[1,2,3,4,5,6];
    const NewsArray = [1,2,3,4,5]; 

    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const openPopular = () =>{
        if(!popular){
            setPopular(true);
            setFollowing(false);
            setNews(false);
        }
    }

    const openFollower = () =>{
        if(!following){
            setPopular(false);
            setFollowing(true);
            setNews(false);
        }
    }

    const openNews = () =>{
        if(!news){
            setPopular(false);
            setFollowing(false);
            setNews(true);
        }
    }


    return (
        <div className={Style.FollowerTab}>
            <div className={Style.FollowerTab_Title}>
                <h2>Top creator list</h2>
                <div className={Style.FollowerTab_Tabs}>
                    <div className={Style.FollowerTab_Tabs_Btn}>
                        <button onClick={() => openPopular()}>
                            <RiUserFollowFill/> Popular
                        </button>
                        <button onClick={() => openFollower()}>
                            <RiUserFollowFill/> Following
                        </button>
                        <button onClick={() => openNews()}>
                            <RiAwardLine/> Noteworthy
                        </button>
                    </div>
                </div>
            </div>
            {
                popular && (
                    <div className={Style.FollowerTab_Box}>
                        {CardArray.map((el,i)=>
                        <FollowerTabCard key={i+1} i={i} el={el}/>
                        )}
                    </div>
                )
            }
            {
                following && (
                    <div className={Style.FollowerTab_Box}>
                        {FollowingArray.map((el,i)=>
                        <FollowerTabCard key={i+1} i={i} el={el}/>
                        )}
                    </div>
                )
            }
             {
                news && (
                    <div className={Style.FollowerTab_Box}>
                        {NewsArray.map((el,i)=>
                        <FollowerTabCard key={i+1} i={i} el={el}/>
                        )}
                    </div>
                )
            }

            <div className={Style.FollowerTab_Member}>
                <div className={Style.FollowerTab_Member_Box}>
                    <a href="#">Show me more</a>
                    <a href="#">Become an author</a>
                </div>
            </div>
        </div>
    )
}

export default FollowerTab;