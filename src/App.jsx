import React from "react";
import {StreamChat} from "stream-chat";
import {Chat} from "stream-chat-react";
import Cookies from "universal-cookie";

import {ChannelListContainer, ChannelContainer, Auth} from "./components";

import "./index.css";

const cookies = new Cookies();

const apiKey = process.env.REACT_CHAT_API_KEY;
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if (authToken) {
    client.connectUser({
        id: cookies.get("userId"),
        name: cookies.get("username"),
        firstName: cookies.get("firstName"),
        LastName: cookies.get("lastName"),
        image: cookies.get("avatarURL"),
        hashedPassword: cookies.get("hashedPassword"),
        phoneNumber: cookies.get("phoneNumber"),
    }, authToken);
}

const App = () => {
    if (!authToken) return <Auth/>

    return (
        <div className="flex">
            <Chat client={client} theme="team light">
                <ChannelListContainer/>
                <ChannelContainer/>
            </Chat>
        </div>
    );
};

export default App;
