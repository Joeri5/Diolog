import React, {useState, useEffect} from 'react';
import {useChatContext} from 'stream-chat-react';

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const getChannels = async (text) => {
        try {
            // TODO: fetch channels
        } catch (error) {
            setQuery('');
        }
    }

    const onSearch = (e) => {
        e.preventDefault();

        setLoading(true);
        setQuery(e.target.value);
        getChannels(e.target.value);
    }

    return (
        <div className="px-5">
            <div className="flex items-center">
                <div className="block absolute ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>
                </div>
                <input
                    className="w-full py-2.5 pl-10 pr-3 text-xs rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-cerise focus:outline-none"
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={onSearch}
                />
            </div>
        </div>
    );
};

export default ChannelSearch;
