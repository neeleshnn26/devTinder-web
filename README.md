# DevTinder-UI
- Created vite+react application
- Installed tailwind.
- Used component library daisyUI
- Install daisy UI 
- Add navbar component from daisy UI
- Created a NavBar component in src file.
- Installed react-router dom
- Create BrowserRouter>Routes>Route
- Create Route children
- Create an outlet in your body component 
- Created a Footer.
- Create a login component.
- Install axios: for api calling
- CORS- install cors in backend => app cors middleware in backend with configuration : origin , credentials:true
- whenever you are making api call with axios pass:{withCredentials:true}, this is because then only our cookie will be visible on the frontend
- install redux toolkit
- configureStore=>Provider=>createSlice=>add Reducer to store 
- Body
    NavBar
      Route=/ => feed
      Route=/login =>Login
      Route=/profile =>Profile
    Footer 
  - created logout feature
  - Edit profile feature
  - Show toast on saving the profile
  - created /user/connection 
  - created connection request page
  - accept/reject connection request
  - send/ignore user card from feed
  - created signup 
  
   

## Cant navigate to other routes without loging in---------

- dekho esa hora hai ki kn hum login krre hai to ek to backend se ek token create ho jaata hai, aur uss token k through hum user ko authenticate krwa skte hai , humne Body component k andar hi logic likha hai ki jb bhi hamara body component re-render hoga to hum ek api call krenge profile/view waali , aur vo tabhi khulegi jb hamare pass token hoga aur token tb hoga jb humne login kia hoga kyuki login krne se hi token milta hai, aur hamare saare routes ka parent route body hai to hum aur saare routex tb hi acess kr paayenge jb haamre pass token hoga , aur token tb hoga jb hum login krenge , isliye bina login kre hum koi bhi route ko access nhi kr paayenge.