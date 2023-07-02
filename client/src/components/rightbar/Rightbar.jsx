import React from 'react'
import "./rightbar.css"
import {Users} from '../../dummyData'
import Online from '../Online/Online'

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u,index)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <div className="rightbarInfoKey">City:</div>
            <div className="rightbarInfoValue">New York</div>
          </div>
          <div className="rightbarInfoItem">
            <div className="rightbarInfoKey">From:</div>
            <div className="rightbarInfoValue">Madrid</div>
          </div>
          <div className="rightbarInfoItem">
            <div className="rightbarInfoKey">Relationship:</div>
            <div className="rightbarInfoValue">Single</div>
          </div>
        </div>

        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
