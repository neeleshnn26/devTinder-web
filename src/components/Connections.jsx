import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utils/connectionSlice"

const Connections = () => {
    const dispatch=useDispatch()
    const connections=useSelector((store)=>store.connection)

    const fetchConnections=async()=>{
   try{
   const res=await axios.get(BASE_URL + "/user/connections",{withCredentials:true})
   dispatch(addConnections(res?.data?.data))
   }
   catch(err)
   {
    console.log(err)
   }
    }
    useEffect(()=>{
        fetchConnections()
    },[])

     if(!connections) return null
     if(connections.length ===0) return <h1 className="flex justify-center items-center font-bold text-3xl text-gray-500 mt-48">No connections Found</h1>
  return (
    <div className="text-center my-10">
        <h1 className="font-bold text-3xl ">Connections</h1>



        {connections?.map((connection) =>{
          const{firstName,lastName,photoUrl,age,gender,about,_id}=connection
          return(
              <div key={_id} className="flex ml-96 bg-gray-600 mt-10 w-1/2 rounded-lg h-[150px] p-3">
                <div>
                  <img className="w-32 h-32 rounded-full" alt="photo" src={photoUrl}/>
                </div>
                <div className="ml-44">
                <h2 className="text-3xl font-bold mt-2 text-black">{firstName+ " " + lastName}</h2>
                <p className="font-semibold text-md mt-2"><span className="font-semibold text-md mt-2">About : </span>{about}</p>
                {age && <p><span className="font-semibold text-md mt-2">Age : </span>{age}</p>}
                {gender && <p><span className="font-semibold text-md mt-2">Gender : </span>{gender}</p>}
                </div>
                
              </div>
)})}



    </div>
  ) 
}

export default Connections 