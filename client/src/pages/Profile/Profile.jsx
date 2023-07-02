import React from 'react'
import './profile.css'
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <div className='mainComponent'>
      <div className="topbar">
        <Topbar />
      </div>
      <div className='profile'>
        <div className="profileLeft">
            <Sidebar />
        </div>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                    <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Harshit Mishra</h4>
                    <h4 className="profileInfoDesc">IIIT DWD</h4>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
            </div>
        </div>
      </div>
    </div>
  )
}
