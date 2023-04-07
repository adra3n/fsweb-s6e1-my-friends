import React, { useState } from 'react'
import friends from '../dummy-data/friends'
import Search from './Search'
import FriendsList from './FriendsList'

export default function App() {
  /* 👉 Buraya state tanımlamak gerekli mi? */
  const [friendsData, setFriendsData] = useState(friends)
  const [filteredData, setFilteredData] = useState(friends)

  const searchHandler = (prompt) => {
    const searchResult = friendsData.filter((f) => {
      f.name.includes(prompt.toLowerCase())
      setFilteredData(searchResult)
    })
    console.log(searchResult)
  }

  return (
    <div className="app-friends container">
      {/* 👉 Buraya hangi componentler gelecek? */}
      <Search searchHandler={searchHandler} />
      <FriendsList friendsData={friendsData} setFriendsData={setFriendsData} />
    </div>
  )
}
