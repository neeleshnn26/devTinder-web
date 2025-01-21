const Premium = () => {
  return (
    <div className="m-10">
 <div className="flex w-full ">
    <div className="card bg-base-300 rounded-box grid  flex-grow place-items-center p-10 pt-8 gap-20">
        <h1 className="text-2xl font-bold bg-blue-950 p-3 rounded-md">Silver membership</h1>
        <ul className="">
            <li className="m-2"> -- Chat with other people</li>
            <li className="m-2"> -- 100 connection request per day</li>
            <li className="m-2"> -- Blue tick ✔️</li>
            <li className="m-2"> -- 3 months</li>
        </ul>
        <button className="bg-green-800 p-3 rounded-md font-bold" >Buy Silver</button>
        </div>
    <div className="divider divider-horizontal">OR</div>
    <div className="card bg-base-300 rounded-box grid  flex-grow place-items-center  p-10 pt-8 gap-20">
        <h1 className="text-2xl font-bold bg-blue-950 p-3 rounded-md ">Gold membership</h1>
        <ul className="">
            <li className="m-2"> -- Chat with other people</li>
            <li className="m-2"> -- infinite connection request </li>
            <li className="m-2"> -- Blue tick ✔️</li>
            <li className="m-2"> -- 6 months</li>
        </ul>
        <button className="bg-green-800 p-3 rounded-md font-bold">Buy Gold</button>
        </div>
  </div>
    </div>
   
  )
}

export default Premium