import React from "react";
import avatar from "../../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({children})=>{

    const tweetData = {
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc:avatar,
        isRetweetedByCurrentUser:false,
        isLikedByCurrentUser:false
    };

    return <TweetContext.Provider value={tweetData}>{children}</TweetContext.Provider>

};