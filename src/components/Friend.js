import React from 'react'
import PetsList from './PetsList'

/* 👉 önce başka bir compenenti bitirmen lazım? */

/* 👉 Ya friend'leri yoksa? bunu unutmayalım. Bir şey yapmak lazım*/

export default function Friend({ friend, setFilteredFriendsData }) {
  const marriedStatusHandler = () => {
    setFilteredFriendsData((prev) =>
      prev.map((f) => {
        if (f.id === friend.id) {
          console.log('f>', f.married, friend.married)
          return {
            ...f,
            married: !f.married,
          }
        } else {
          return f
        }
      })
    )
  }

  return (
    <div className="friend-friends container">
      <div className="friend-info">
        <div>
          <h3>Adı: {friend.name} </h3>
          <p>Yaş: {friend.age}</p>
          <p>
            Evli mi?: {friend.married ? 'Evet' : 'Hayır'}
            {console.log('fr>', friend.married)}
            <button onClick={marriedStatusHandler}>Değiştir</button>
          </p>
          <div>
            Hobileri:
            <ul>
              {friend.hobbies.map((e, i) => {
                return <li key={i}>{e}</li>
              })}
            </ul>
          </div>
        </div>

        <div>
          {/* 👉 Tasarıma göre buraya hangi component gelmeli? */}
          <PetsList pets={friend.pets}></PetsList>
        </div>
      </div>
    </div>
  )
}
