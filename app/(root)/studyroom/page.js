'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import { MdPeopleAlt } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";

const JoinVideoChatPopup = ({ onClose, onSubmit }) => {
  const [meetingLink, setMeetingLink] = useState('');

  const handleChange = (e) => {
    setMeetingLink(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(meetingLink);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Join a Video Chat</h2>
        <input type="text" placeholder="Enter meeting link" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4" value={meetingLink} onChange={handleChange} />
        <div className="flex justify-end">
          <a href={`${meetingLink}`} target="_blank"><button className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2" onClick={handleSubmit}>Join</button></a>
          <button className="px-4 py-2 bg-gray-300 rounded-lg" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const CommunityCard = ({ community }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-[220px]">
      <h3 className="text-base font-semibold text-gray-800">{community.name}</h3>
    </div>
  );
};

const MainCommunityCard = ({ community, onAddCommunity, onRemoveCommunity }) => {
  const [joined, setJoined] = useState(false);

  const handleAddCommunity = () => {
    onAddCommunity(community);
    setJoined(true);
  };

  const handleRemoveCommunity = () => {
    onRemoveCommunity(community.id);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-[400px] flex flex-row gap-3 m-h-screen">
      {/* <Image src={community.image} width={60} height={20} alt="ai"/> */}
      <div className="flex flex-col gap-1 justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{community.name}</h3>
        <p className="text-sm text-gray-600">{community.description}</p>
        <div className="flex flex-row justify-between">
          <p className="flex flex-row items-center gap-1 text-gray-500"><span><MdPeopleAlt/></span>{community.followers}</p>
          {joined ? (
            <button className="text-xl text-gray-500" onClick={handleRemoveCommunity}><MdPersonRemove /></button>
          ) : (
            <button className="text-xl text-gray-500" onClick={handleAddCommunity}><MdAddCircleOutline /></button>
          )}
        </div>
      </div>
    </div>
  );
}

const StudyRoom = () => {
  const [communitiesJoined, setCommunitiesJoined] = useState([]);
  const [showJoinVideoChat, setShowJoinVideoChat] = useState(false);

  const handleRemoveCommunity = (id) => {
    setCommunitiesJoined(communitiesJoined.filter(community => community.id !== id));
  };

  const handleAddCommunity = (community) => {
    setCommunitiesJoined([...communitiesJoined, community]);
  };

  const communities = [
    { id: 1, name: 'AI Enthusiasts', image:'/ai.png', description: 'A community for enthusiasts passionate about artificial intelligence and machine learning.', followers:'300' },
    { id: 2, name: 'Blockchain Developers Hub', image:'/ai.png', description: 'Connect with fellow developers and enthusiasts interested in blockchain technology and cryptocurrencies.', followers:'150' },
    { id: 3, name: 'Data Science Society', image:'/ai.png', description: 'Join a community of data scientists and analysts exploring the latest trends and techniques in data science.', followers:'200' },
    { id: 4, name: 'Machine Learning Mastery', image:'/ai.png', description: 'A community dedicated to mastering machine learning algorithms and techniques through collaborative learning.', followers:'130' },
    { id: 5, name: 'Algorithm Wizards', image:'/ai.png', description: 'Join this community of algorithm enthusiasts to discuss and learn about advanced data structures and algorithms.', followers:'250' },
    { id: 6, name: 'Tech Entrepreneurs Network',image:'/ai.png',  description: 'A community for aspiring and established tech entrepreneurs to network, share insights, and collaborate on innovative projects.', followers:'75'},
  ];

  const handleJoinVideoChat = () => {
    setShowJoinVideoChat(true);
  };

  const handleCloseJoinVideoChat = () => {
    setShowJoinVideoChat(false);
  };

  const handleSubmitMeetingLink = (meetingLink) => {
    // Handle submitting meeting link here
    console.log("Meeting link:", meetingLink);
    setShowJoinVideoChat(false);
  };


  return (
    <div className="flex flex-row w-full h-screen" style={{
      backgroundColor: "rgb(219, 234, 254)",
      backgroundImage: "radial-gradient(at 12% 78%, rgb(165, 180, 252) 0, transparent 85%), radial-gradient(at 85% 100%, rgb(129, 140, 248) 0, transparent 25%), radial-gradient(at 25% 10%, rgb(187, 247, 208) 0, transparent 61%), radial-gradient(at 0% 36%, rgb(3, 105, 161) 0, transparent 26%), radial-gradient(at 28% 100%, rgb(59, 130, 246) 0, transparent 78%)"}}>
        <div className="flex flex-col w-full py-8">
          <div className="flex flex-row flex-wrap gap-x-4 px-8 justify-center">
            {communities.map(community => (
              <MainCommunityCard key={community.id} community={community} onAddCommunity={handleAddCommunity}/>
            ))}  
          </div>
          <div className="h-screen w-full flex flex-row items-end justify-center gap-7">
            <div className="flex flex-col gap-2 pt-6">
                <a href="https://console-api-sig.zegocloud.com/s/uikit/FruARj" target="_blank"><button className="px-6 py-4 bg-blue-700 rounded-xl text-white font-semibold w-[212px]">Create a Video Chat</button></a>
                <button className="px-6 py-4 bg-blue-700 rounded-xl text-white font-semibold w-[212px]"
                  onClick={handleJoinVideoChat}
                >
                  Join a Video Chat
                </button>
            {showJoinVideoChat && (
              <JoinVideoChatPopup onClose={handleCloseJoinVideoChat} onSubmit={handleSubmitMeetingLink} />
            )}
            </div>
            <div className="flex flex-col gap-2">
            <a href="/study-room"><button className="px-6 py-4 bg-blue-700 rounded-xl text-white font-semibold w-[212px]">Edit a Doc Live</button></a>
                <a href=""><button className="px-6 py-4 bg-blue-700 rounded-xl text-white font-semibold min-w-[212px]">Chat with Each Other</button></a>
            </div>
        </div>
        </div>
        
        
        <div className="flex flex-col items-center py-7 sticky min-w-[270px] border-l-[2px] border-gray-100">
          <h2 className="font-semibold text-xl text-blue-700 pb-5">Communities Joined</h2>
          {communitiesJoined.map(community => (
          <CommunityCard key={community.id} community={community} onRemoveCommunity={handleRemoveCommunity} />
          ))}
        </div>
    </div>
    
  )
}

export default StudyRoom