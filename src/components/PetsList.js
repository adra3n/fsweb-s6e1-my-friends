import Pet from './Pet'

export default function PetsList({ pets, setFriendsData, friendsData }) {
  return (
    <div className="list-pets-friends container">
      {/* 👉 Buraya hangi component gelmeli ve daha önemlisi nasıl gelmeli? */}
      {pets.map((pet) => {
        return (
          <Pet
            key={pet.id}
            pet={pet}
            setFriendsData={setFriendsData}
            friendsData={friendsData}
          ></Pet>
        )
      })}
    </div>
  )
}
