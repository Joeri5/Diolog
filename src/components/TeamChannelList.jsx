import React from 'react';

const TeamChannelList = ({children, error = false, loading, type}) => {
    if (error) {
        return type === 'team' ? (
            <div className="px-5 text-xs">
                <p className="font-medium text-cerise">
                    Connection error, please wait a moment and try again!
                </p>
            </div>
        ) : null;
    }

    if (loading) {
        return type === 'team' ? (
            <div className="px-5 text-xs">
                <p className="font-medium text-cerise">
                    {type === 'team' ? 'Channels' : 'Messages'} loading...
                </p>
            </div>
        ) : null;
    }

    return (
        <div className="">
            <div className="">
                <p className="">
                    {type === 'team' ? 'Channels' : 'Direct Messages'}
                </p>
                {/* Button - add channel */}
            </div>
            {children}
        </div>
    );
};

export default TeamChannelList;
