// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Body from "./components/Body"
// import Login from "./components/Login"
// import Profile from "./components/Profile"
// import { Provider } from "react-redux"
// import appStore from "./utils/appStore"
// import Feed from "./components/Feed"
// import Error from "./components/Error"
// import Connections from "./components/Connections"
// import Requests from "./components/Requests"
// import Premium from "./components/Premium"
// import Chat from "./components/chat"

// function App() {
//   return (
//     <>
//     <Provider store={appStore }>

//     <BrowserRouter basename="/">
// <Routes>
//       <Route path="/" element={<Body/>}> 

//       <Route path="/" element={<Feed/>}/>
//       <Route path="/login" element={<Login/>}/>
//       <Route path="/profile" element={<Profile />}/>
//       <Route path="/connections" element={<Connections />}/>
//       <Route path="/requests" element={<Requests />}/>
//       <Route path="/premium" element={<Premium />}/>
//       <Route path="/chat/:targetUserId" element={<Chat/>}/>
      
      

//       </Route>
 
//       <Route path="*" element={<Error/>} /> 

// </Routes>
//     </BrowserRouter>

//     </Provider>
    
//     </> 
//   )
// }

// export default App
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Error from "./components/Error";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import Premium from "./components/Premium";
import Chat from "./components/chat";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <BrowserRouter basename="/">
            <Routes>
              {/* Layout Route */}
              <Route path="/" element={<Body />}>
                {/* Default Route */}
                <Route index element={<Feed />} />
                <Route path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
                <Route path="connections" element={<Connections />} />
                <Route path="requests" element={<Requests />} />
                <Route path="premium" element={<Premium />} />
                <Route path="chat/:targetUserId" element={<Chat />} />
              </Route>

              {/* Error Page for Unmatched Routes */}
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
