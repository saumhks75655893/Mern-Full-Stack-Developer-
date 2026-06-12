import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { BiShare } from "react-icons/bi";
import Button from "./Button";
import Public from "./Public";

const UserCard = (props) => {
  return (
    <div className="w-full  shadow-2xl rounded-2xl overflow-hidden">
      {/* First Div */}
      <div className=" bg-blue-400 w-full  aspect-video relative bg-cover bg-center">
        <img
          className="object-cover  h-full aspect-square rounded-full absolute left-[50%] -translate-x-1/2 translate-y-1/8 border-blue-400 border-4 p-1 bg-white"
          src={props.imgLink}
          alt=""
        />
      </div>
      {/* Second Div */}
      <div className="bg-white flex flex-col items-center justify-around">
        <h3 className="text-2xl font-bold mt-7 ">{props.title}</h3>
        <p className="text-[18px] font-semibold my-2">{props.jobTitle}</p>
        <div className="flex items-center justify-center gap-3">
          <FaFacebookF className="bg-blue-800 p-2 text-4xl text-white rounded-full " />
          <FaTwitter className="bg-blue-500 rounded-full text-white  p-2 text-4xl" />
          <RiInstagramFill className="bg-orange-900 rounded-full text-white  p-2 text-4xl " />
          <FaYoutube className="bg-orange-700 rounded-full text-white  p-2 text-4xl" />
        </div>
        <div className="flex gap-2">
          <Button title="Subscribe" />
          <Button title="Message" />
        </div>
        <div className="flex items-center gap-4 mb-5">
          <Public data={props.likeCount} icon={<CiHeart />} />|
          <Public data={props.commentCount} icon={<BiMessageRounded />} />|
          <Public data={props.shareCount} icon={<BiShare />} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
