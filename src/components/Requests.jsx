import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addRequest } from "../utils/requestSlice"
import { useEffect } from "react"

const Requests = () => {
    const requests=useSelector((store)=>store.request)
    console.log(requests)

    const dispatch=useDispatch()
   const fetchRequest=async()=>{
    try{
       const res= await axios.get(BASE_URL + "/user/requests/received",{withCredentials:true})
       console.log(res.data.data[0])
       dispatch(addRequest(res?.data?.data))
    }
    catch(err)
    {
     console.log(err)
    }
   }
   useEffect(()=>{
     fetchRequest()
   },[])

    if(!requests) return null
   if(requests.length ===0) return <h1 className="flex justify-center items-center font-bold text-3xl text-gray-500 mt-48">No Request found</h1>
return (
  <div className="text-center my-10">
      <h1 className="font-bold text-3xl ">Connections</h1>



      {requests.map((request) =>{
        if (!request.fromUserId) return null;
        const{firstName,lastName,photoUrl,age,gender,about,_id}=request.fromUserId
        return(
            <div key={_id} className="flex ml-96 bg-gray-600 mt-10 w-1/2 rounded-lg h-[150px] p-3">
              <div>
                <img className="w-32 h-32 rounded-full" alt="photo" src={photoUrl}/>
              </div>
              <div className="ml-24">
              <h2 className="text-3xl font-bold mt-2 text-black">{firstName+ " " + lastName}</h2>
              <p className="font-semibold text-md mt-2"><span className="font-semibold text-md mt-2">About : </span>{about}</p>
              {age && <p><span className="font-semibold text-md mt-2">Age : </span>{age}</p>}
              {gender && <p><span className="font-semibold text-md mt-2">Gender : </span>{gender}</p>}
              </div>
              <div className="flex ml-12">
              <button className="btn btn-primary">Accept</button>
              <button className="btn btn-accent">Reject</button>
              </div>
              </div>
            )})}



  </div>
) 
}

export default Requests