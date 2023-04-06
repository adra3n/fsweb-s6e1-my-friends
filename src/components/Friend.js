import React, { useState } from 'react'
import PetsList from './PetsList'

export default function Friend({ friend, setFriendsData, friendsData }) {
  /* 👉 önce başka bir compenenti bitirmen lazım? */

  /* 👉 Ya friend'leri yoksa? bunu unutmayalım. Bir şey yapmak lazım*/

  const [marriedStatus, setMarriedStatus] = useState(friend.married)

  return (
    <div className="friend-friends container">
      <div className="friend-info">
        <div>
          <h3>Adı: {friend.name} </h3>
          <p>Yaş: {friend.age}</p>
          <p>
            Evli mi?: {marriedStatus ? 'Evet' : 'Hayır'}{' '}
            <button
              onClick={() => {
                setMarriedStatus(!marriedStatus)
              }}
            >
              Değiştir
            </button>
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
          <PetsList
            pets={friend.pets}
            setFriendsData={setFriendsData}
            friendsData={friendsData}
          ></PetsList>
        </div>
      </div>
    </div>
  )
}
