import React from 'react'

export default function Search({ searchHandler }) {
  /* 👉 Buraya props lazım mı? bir de bir yardımcı function yazsak iyi olur mu? */

  return (
    <div className="search-friends container">
      <input onChange={(e) => searchHandler(e.target.value)} />
    </div>
  )
}
