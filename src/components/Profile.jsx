import { useSelector } from "react-redux"
import EditProfile from "./EditProfile"

const Profile = () => {
  const user=useSelector((store)=>store.user)
  return (
    user && Object.keys(user).length > 0 ? (
      <div>
        <EditProfile user={user} />
      </div>
    ) : (
      <div>Loading...</div>
    )
    )

}

export default Profile
