import React from 'react'
import Friend from './Friend'

export default function FriendsList({
  filteredFriendsData,
  setFilteredFriendsData,
}) {
  /* 👉 Buraya propları almak lazım mı? */

  return (
    <div className="list-friends container">
      {/* 👉 buraya hangi component/ları almak lazım? */}
      {filteredFriendsData.map((friend) => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
            setFilteredFriendsData={setFilteredFriendsData}
          />
        )
      })}
    </div>
  )
}
