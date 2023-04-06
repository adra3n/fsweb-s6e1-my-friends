import React, { useState } from 'react'

export default function Pet({ pet }) {
  /* 👉 Buraya prop lazım mı? state lazım mı? */

  const [petLikes, setPetLikes] = useState(0)

  const handleLike = () => {
    setPetLikes(petLikes + 1)
  }

  return (
    <div className="pet-friends container">
      <p>
        {pet.name} ({pet.type})
      </p>
      {/* 👉 tasarıma dikkat. buraya bir şey lazım sanki? */}
      <button onClick={() => handleLike(pet)}>Beğen</button>
      <p>{petLikes}</p>
    </div>
  )
}
