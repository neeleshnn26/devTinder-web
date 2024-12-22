import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice"
import { useEffect } from "react"
import UserCard from "./UserCard"

const Feed = () => {
  const feed=useSelector((store)=>store.feed)
  console.log(feed)
  const dispatch=useDispatch()


  const getFeed=async()=>{
    try{
      const res= await axios.get(BASE_URL+"/user/feed",{withCredentials:true})
     dispatch(addFeed(res?.data?.data))
    } 
    catch(err)
    {
console.log(err)
    }
   }
   useEffect(()=>{
     getFeed()
   },[])

   if(!feed || !Array.isArray(feed)) {
    return (
      <h1 className="text-3xl font-bold text-pink-500">Loading feed...</h1>
    );
  }

  if (feed.length === 0) {
    return (
      <h1 className="text-3xl font-bold text-gray-500 flex justify-center items-center mt-40">No feed available</h1>
    );
  }

  return (
    <div className="flex justify-center my-20">
      <UserCard user={feed[0]} />
    </div>
  );
};
export default Feed