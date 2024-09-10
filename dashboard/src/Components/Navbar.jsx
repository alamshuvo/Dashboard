// import {  FloatingLabel } from "flowbite-react";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import { Avatar, Dropdown } from "flowbite-react";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut, IoIosNotifications, IoMdSettings } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import { MdOutlineDarkMode, MdOutlineEventNote, MdOutlineHelpCenter } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { GiUsaFlag } from "react-icons/gi";
import { SlSizeFullscreen } from "react-icons/sl";

const Navbar = () => {
  return (
    <nav className=" border-b-2 p-5">
      <div className="flex justify-between items-center">
        {/* left side  */}
        <div className=" flex justify-center items-center ">
          {/* <FloatingLabel variant="standard" placeholder="search item" className="bg-main-bg outline-none border-r-2 p-3" /> */}
          <div>
            <input
              type="text"
              placeholder="search term "
              className="bg-main-bg border-none"
            />
          </div>
          <div>
            <button className="border-l-2 px-6 py-3   bg-main-bg hover:bg-button-bg rounded-r hover:text-main-bg">
              <IoSearchOutline className="" />
            </button>
          </div>
        </div>
        {/* right side */}
        <div className="flex justify-center items-center gap-6">
        <div className="relative">
        <IoIosNotifications className="text-2xl hover:text-button-bg" />
        <p className="absolute -top-3 -right-2 rounded-full w-5 text-center h-5 bg-button-bg text-white ">3</p>
        </div>
          {/* mode  */}
          <MdOutlineDarkMode className="text-2xl hover:text-button-bg" />
          {/* full screan */}
          <SlSizeFullscreen className="text-2xl hover:text-button-bg"/>
          {/* language */}
          <Dropdown   label={
              <BiWorld className="text-2xl" />
            }
            arrowIcon={true}
            inline
          > 
          <div className="p-5">
          <Dropdown.Item className="flex justify-start items-center gap-4 text-button-bg"><GiUsaFlag className="text-2xl " /> English</Dropdown.Item>
          </div>

          </Dropdown>
          {/* avatar */}
          <Dropdown
            label={
              <Avatar
                alt="User settings"
                img="/public/avatar-2.png"
                rounded
              />
            }
            arrowIcon={true}
            inline
          >
            
           <div className="p-5 text-xs font-semibold">
           <Dropdown.Item className="flex justify-start items-center gap-4"><CgProfile className="text-xl " /> Edit Profile</Dropdown.Item>
            <Dropdown.Item className="flex justify-start items-center gap-4"> <IoMdSettings className="text-xl " />Account Settings</Dropdown.Item>
            <Dropdown.Item className="flex justify-start items-center gap-4"> <CiWallet className="text-xl " />Wallet</Dropdown.Item>
            <Dropdown.Item className="flex justify-start items-center gap-4"> <MdOutlineEventNote className="text-xl " />Billing</Dropdown.Item>
            <Dropdown.Item className="flex justify-start items-center gap-4"> <MdOutlineHelpCenter className="text-xl " />Help Center</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="text-red-600 flex justify-start items-center gap-4"> <IoIosLogOut className="text-xl " />Log Out</Dropdown.Item>
           </div>
          </Dropdown>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
