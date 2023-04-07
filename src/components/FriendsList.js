import React from 'react'
import Friend from './Friend'

export default function FriendsList({ friendsData, setFriendsData }) {
  /* 👉 Buraya propları almak lazım mı? */

  return (
    <div className="list-friends container">
      {/* 👉 buraya hangi component/ları almak lazım? */}
      {friendsData.map((friend) => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
            setFriendsData={setFriendsData}
          />
        )
      })}
    </div>
  )
}
