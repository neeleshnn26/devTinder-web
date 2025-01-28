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

  # Deployment
  - Signup on AWS.
  - launch instance.
  - chmod 400 <secret>.pem
  - ssh -i "devTinder-secret.pem" ubuntu@ec2-13-60-23-11.eu-north-1.compute.amazonaws.com.
  - install node version .
  - Git clone.
   
  - Frontend
     - install dependencies using --> npm install.
     - npm run build
     - sudo apt update
     - sudo apt install ngnix
     - sudo systemctl start nginx
     - sudo systemctl enable nginx
     - copy code from dist(build files) to /var/www/html/
     - sudo scp -r dist/* /var/www/html/
     - Enable port 80 of your instance.

 - Backend
    - allowed EC2 instance ublic Ip on mongoDB server.
    - installed: npm install pm2 -g.
    - pm2 start npm -- start.
    - pm2 logs : for seeing logs.
    - pm2 list ,pm2 flush<name>,pm2 stop<name>, pm2 delete<name>.
    - pm2 start npm --name "devTinder-backend" -- start , change the name.
    - config nginx - /etc/nginx/sites-available/default.
    - restart nginx - sudo systemctl restart nginx.
    - Modify Base URL in fontend project to /api.


    - server_name 13.60.23.11;

     -   location /api/ {
        proxy_pass http://localhost:3000/; # Proxy to your Node.js app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }   

# scheduling cron jobs in nodejs

- installing node-cron.
- Learning about cron expression syntaxx. crontab.guru.
- Schedulre a job.
- date-fns.
- Find all the unique ids , who have got connection request in previous day.
- Explore queue mechanism to send bulk emails.
- Amazon bulk email SES.
- make send Email function dynamic.
- bee queue and bull npm packages,

  



  # Razorpay gateway integration
  - sign up razorpay and complete KYC.
  - created UI for premium page.
  - creating an API for create order in backend.
  - 

# Real time chat using Websocket(socket.io)
- Build the UI for a chat window on /chat/:targetUserId
- Setup socket.io in backend.
- npm i socket.io ( in backend)
- const http=require("http)
- const server = http.createServer(app)
- 
   

## Cant navigate to other routes without loging in---------

- dekho esa hora hai ki kn hum login krre hai to ek to backend se ek token create ho jaata hai, aur uss token k through hum user ko authenticate krwa skte hai , humne Body component k andar hi logic likha hai ki jb bhi hamara body component re-render hoga to hum ek api call krenge profile/view waali , aur vo tabhi khulegi jb hamare pass token hoga aur token tb hoga jb humne login kia hoga kyuki login krne se hi token milta hai, aur hamare saare routes ka parent route body hai to hum aur saare routex tb hi acess kr paayenge jb haamre pass token hoga , aur token tb hoga jb hum login krenge , isliye bina login kre hum koi bhi route ko access nhi kr paayenge.