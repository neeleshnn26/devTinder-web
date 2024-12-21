const UserCard = ({user}) => {
const{firstName,lastName,age,gender,about,photoUrl}=user
  return (
    <div className="card bg-base-300 w-96 h-[600px] pb-0 shadow-xl ">
    <figure className="">
      <img className=""
        src={photoUrl}
        alt="Picture" />
    </figure>
    <div className="card-body">
      <h2 className="card-title my-2 font-bold text-3xl">{firstName + " " + lastName}</h2>
      <div>
      {age && <p className="my-3"><span className="font-bold text-lg">Age :</span> {age}</p>} {gender && <p className="my-3"><span className="font-bold text-lg ">Gender : </span>{gender}</p>}
      <p className="my-4"><span className="font-bold text-lg">About : </span>{about}</p>
      </div>
      <div className="card-actions justify-between mt-5">
        <button className="btn hover:bg-red-900 text-lg">Ignore</button>
        <button className="btn hover:bg-green-900 text-lg">Interested</button>
      </div>
    </div>
  </div>
  )
}

export default UserCard