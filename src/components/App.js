import React, { useState } from 'react'
import friends from '../dummy-data/friends'
import Search from './Search'
import FriendsList from './FriendsList'

export default function App() {
  /* 👉 Buraya state tanımlamak gerekli mi? */
  const [friendsData, setFriendsData] = useState(friends)

  return (
    <div className="app-friends container">
      {/* 👉 Buraya hangi componentler gelecek? */}
      <Search />
      <FriendsList friendsData={friendsData} setFriendsData={setFriendsData} />
    </div>
  )
}
