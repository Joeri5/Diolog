import React from "react";
import {ChannelList, useChatContext} from "stream-chat-react";
import Cookies from "universal-cookie";

import {ChannelSearch, TeamChannelList, TeamChannelPreview} from "./";

import {Icon} from "../assets";

const SideBar = () => {
    return (
        <div className="h-screen w-20 bg-custom-black flex flex-col items-center justify-between py-10 gap-10">
            <div className="bg-cerise p-2 rounded-full">
                <div className="">
                    <img src={Icon} alt="Diolog" width="30"/>
                </div>
            </div>
            <div className="p-2">
                <div className="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-red-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

const CompanyHeader = () => {
    return (
        <div className="border-b-2 pb-3 border-custom-black-50">
            <p className="text-xl text-white pt-2 font-medium px-5">Pager</p>
        </div>
    );
};

const ChannelListContainer = () => {
    return (
        <div className="flex">
            <SideBar/>
            <div className="flex flex-col w-64 py-10 gap-10 h-screen bg-custom-black-400">
                <CompanyHeader/>
                <ChannelSearch/>
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {
                    }}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type="team"
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type="team"
                        />
                    )}
                />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {
                    }}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type="messaging"
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default ChannelListContainer;
