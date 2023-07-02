import React from 'react'
import "./topbar.css"
import Person from '@mui/icons-material/Person';
import Search from '@mui/icons-material/Search';
import Notifications from '@mui/icons-material/Notifications';
import Chat from '@mui/icons-material/Chat';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
          <span className="logo">Social Chat</span>
      </div>
      <div className="topbarCenter">
          <div className="searchbar">
            <Search className='searchIcon'/>
            <input className='searchInput' placeholder='Search for friend, post or video'/>
          </div>
      </div>
      <div className="topbarRight">
            <div className="topbarLinks">
              <span className="topbarLink">Homepage</span>
              <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person />
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge">2</span>
              </div>
              <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge">2</span>
              </div>
              <img src="./assets/person/1.jpeg" alt="" className='topbarImg'/>
            </div>
      </div>
    </div>
  )
}
