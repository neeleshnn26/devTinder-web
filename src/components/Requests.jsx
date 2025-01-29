// import axios from "axios"
// import { BASE_URL } from "../utils/constants"
// import { useDispatch, useSelector } from "react-redux"
// import { addRequest, removeRequest } from "../utils/requestSlice"
// import { useEffect } from "react"

// const Requests = () => {
//     const requests=useSelector((store)=>store.request)
//     const dispatch=useDispatch()


//     const reviewRequest=async(status,_id)=>{
//        try{
//        const res=await axios.post(BASE_URL+"/request/review/" + status +"/"+_id,{},{withCredentials:true})
//        dispatch(removeRequest(_id))
//        }
//        catch(err)
//        {
//           console.log(err)
//           if (err.response && err.response.status === 400) {
//             dispatch(removeRequest(_id));  
//        }
//     }



//    const fetchRequest=async()=>{
//     try{
//        const res= await axios.get(BASE_URL + "/user/requests/received",{withCredentials:true})
//        dispatch(addRequest(res?.data?.data))
//     }
//     catch(err)
//     {
//      console.log(err)
//     }
//    }
//    useEffect(()=>{
//      fetchRequest()
//    },[])

//     if(!requests) return null
//    if(requests.length ===0) return <h1 className="flex justify-center items-center font-bold text-3xl text-gray-500 mt-48">No Request found</h1>
// return (
//   <div className="text-center my-10">
//       <h1 className="font-bold text-3xl ">Requests</h1>



//       {requests.map((request) =>{
//         if (!request.fromUserId) return null;
//         const{firstName,lastName,photoUrl,age,gender,about,_id}=request.fromUserId
//         return(
//             <div key={_id} className="flex ml-96 bg-gray-600 mt-10 w-1/2 rounded-xl h-[150px] p-3">
//               <div>
//                 <img className="w-32 h-32 rounded-full" alt="photo" src={photoUrl}/>
//               </div>
//               <div className="ml-24">
//               <h2 className="text-3xl font-bold mt-2 text-black">{firstName+ " " + lastName}</h2>
//               <p className="font-semibold text-md mt-2"><span className="font-semibold text-md mt-2">About : </span>{about}</p>
//               {age && <p><span className="font-semibold text-md mt-2">Age : </span>{age}</p>}
//               {gender && <p><span className="font-semibold text-md mt-2">Gender : </span>{gender}</p>}
//               </div>
//               <div className="flex ml-12 mt-10">
//               <button className="btn  hover:bg-green-800 mr-5" onClick={()=>reviewRequest("accepted",request._id)}>Accept</button>
//               <button className="btn hover:bg-red-800 ml-3" onClick={()=>reviewRequest("rejected",request._id)}>Reject</button>
//               </div>
//               </div>
//             )})}



//   </div>
// ) 
// }}

// export default Requests
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addRequest, removeRequest } from "../utils/requestSlice"
import { useEffect } from "react"

const Requests = () => {
    const requests = useSelector((store) => store.request);
    const dispatch = useDispatch();

    const reviewRequest = async (status, _id) => {
        try {
            const res = await axios.post(
                BASE_URL + "/request/review/" + status + "/" + _id,
                {},
                { withCredentials: true }
            );
            dispatch(removeRequest(_id));
        } catch (err) {
            console.log(err);
            if (err.response && err.response.status === 400) {
                dispatch(removeRequest(_id));
            }
        }
    };

    const fetchRequest = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/received", {
                withCredentials: true,
            });
            dispatch(addRequest(res?.data?.data));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchRequest();
    }, []);

    if (!requests) return null;
    if (requests.length === 0)
        return (
            <h1 className="flex justify-center items-center font-bold text-3xl text-gray-500 mt-48">
                No Request found
            </h1>
        );

    return (
        <div className="text-center my-10">
            <h1 className="font-bold text-3xl">Requests</h1>

            {requests.map((request) => {
                if (!request.fromUserId) return null;
                const { firstName, lastName, photoUrl, age, gender, about, _id } =
                    request.fromUserId;
                return (
                    <div
                        key={_id}
                        className="flex ml-96 bg-gray-600 mt-10 w-1/2 rounded-xl h-[150px] p-3"
                    >
                        <div>
                            <img
                                className="w-32 h-32 rounded-full"
                                alt="photo"
                                src={photoUrl}
                            />
                        </div>
                        <div className="ml-24">
                            <h2 className="text-3xl font-bold mt-2 text-black">
                                {firstName + " " + lastName}
                            </h2>
                            <p className="font-semibold text-md mt-2">
                                <span className="font-semibold text-md mt-2">
                                    About :{" "}
                                </span>
                                {about}
                            </p>
                            {age && (
                                <p>
                                    <span className="font-semibold text-md mt-2">
                                        Age :{" "}
                                    </span>
                                    {age}
                                </p>
                            )}
                            {gender && (
                                <p>
                                    <span className="font-semibold text-md mt-2">
                                        Gender :{" "}
                                    </span>
                                    {gender}
                                </p>
                            )}
                        </div>
                        <div className="flex ml-12 mt-10">
                            <button
                                className="btn hover:bg-green-800 mr-5"
                                onClick={() => reviewRequest("accepted", request._id)}
                            >
                                Accept
                            </button>
                            <button
                                className="btn hover:bg-red-800 ml-3"
                                onClick={() => reviewRequest("rejected", request._id)}
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Requests;
