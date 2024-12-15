import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate} from "react-router"
import { BASE_URL } from "../utils/constants"
import { removeUser } from "../utils/userSlice"

const NavBar = () => {
    const user=useSelector((store)=>store.user)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleLogout=async()=>{
       try{
       await axios.post(BASE_URL + "/logout",{},{withCredentials:true})
      dispatch(removeUser())
      navigate("/login")
     }
       catch(err)
       {
        if(err)
        {
            navigate("/Error")
        }
         
       }
    }
   
  return (
    <div className="navbar bg-base-300">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl" >👨‍💻 DevTinder</a>
    </div>

    {user &&(
      <div className="flex-none gap-2">
      <div className="form control">Welcome,{user.firstName}</div>
   <div className="dropdown dropdown-end mx-5">
     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
       <div className="w-10 rounded-full">
         <img
           alt="Tailwind CSS Navbar component"
           src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
       </div>
     </div>
     <ul
       tabIndex={0}
       className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <li>
         <Link to="/profile" className="justify-between">
           Profile
           <span className="badge">New</span>
         </Link>
       </li>
       <li><a>Settings</a></li>
       <li><a onClick={handleLogout} >Logout</a></li>
     </ul>
   </div>
 </div>)}
    
  </div>
  )
}

export default NavBar