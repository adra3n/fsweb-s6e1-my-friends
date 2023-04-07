import React, { useState } from 'react'
import friends from '../dummy-data/friends'
import Search from './Search'
import FriendsList from './FriendsList'

export default function App() {
  /* 👉 Buraya state tanımlamak gerekli mi? */
  const [friendsData, setFriendsData] = useState(friends)
  const [filteredFriendsData, setFilteredFriendsData] = useState(friends)

  const searchHandler = (prompt) => {
    const searchResult = friendsData.filter((f) => {
      const lowerCaseName = f.name.toLowerCase()

      return lowerCaseName.includes(prompt.toLowerCase())
    })
    console.log(searchResult)
    setFilteredFriendsData(searchResult)
  }

  return (
    <div className="app-friends container">
      {/* 👉 Buraya hangi componentler gelecek? */}
      <Search searchHandler={searchHandler} />
      <FriendsList
        friendsData={filteredFriendsData}
        setFriendsData={setFriendsData}
      />
    </div>
  )
}
