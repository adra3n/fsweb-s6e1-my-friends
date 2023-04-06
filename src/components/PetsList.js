import React from 'react'

import Pet from './Pet'

export default function PetsList({ pets }) {
  return (
    <div className="list-pets-friends container">
      {/* 👉 Buraya hangi component gelmeli ve daha önemlisi nasıl gelmeli? */}
      {pets.map((pet) => {
        return <Pet key={pet.id} pet={pet}></Pet>
      })}
    </div>
  )
}
