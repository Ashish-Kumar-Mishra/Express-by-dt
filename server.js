/*                Express form                                  */

// const express = require('express');
// const path =require('path')
// const app=express()

// const PORT=process.env.PORT ||3000

// app.set('views',path.join(__dirname,'views'));
// app.set('view engine',"pug");

// app.get('/',(req,res)=>{
//     res.render('index',{title:"Form Handling"});
// })

// // to get data in serialize order need to call  middleware
// app.use(express.urlencoded({
//         extended:true
   
// }))

// app.post("/form_submit",(req,res)=>{
//     const username=req.body.username
//     const email=req.body.email
//     res.end(`Your Username is :${username} and Email is ${email}`)
// })
// app.listen(PORT,()=>{
//     console.log(`Listening to request on http://localhost:${PORT}`);
// })

/*                Session                                 */

// session is used to track the user activities
// const express = require('express');
// const app=express()
// const session=require('express-session')

// const PORT=process.env.PORT ||3000

// app.use(session({
//     secret:"Your Secret Key",
//     resave:true,
//     saveUninitialized:true 
// }))
// app.get('/',(req,res)=>{
//     req.session.name="John";
//     return res.send("Session Set")
// })

// app.get('/session',(req,res)=>{
//     var name =req.session.name;
//     // console.log(req.session);
//     return res.send(name)
// })
// // to destroy session
// app.get('/destroy',(req,res)=>{
//     req.session.destroy(function(error){
//         console.log("session destroy");
//     })
//     res.end();
// })

// app.listen(PORT,()=>{
//     console.log(`Listening to request on http://localhost:${PORT}`);
// })

/*                                  Cookies                                  */

// const express = require('express');
// const app=express()
// const  cookies  = require('cookie-parser');

// const PORT=process.env.PORT ||3000

// //  middleware method
// app.use(cookies());

// let users={
//     name:"John",
//     Age:28
// }

// app.get("/",(req,res)=>{
//     res.send("Cookies Tutorial");
// })

// app.get("/setuser",(req,res)=>{
//     res.cookie("userData",users);
//     res.send("User Data added to cookies");

// })

// app.get("/getuser",(req,res)=>{
// res.send(req.cookies);
// })

// app.get("/logout",(req,res)=>{
//     res.clearCookie("userData");
//     res.send("user logout successfully")
//     })

// app.listen(PORT,()=>{
//     console.log(`Listening to request on http://localhost:${PORT}`);
// })
  
/*                       mongoDB integratio                                            */
//  {
//     _id:10,
//      username:'peter',
//      email:['pbbakum@gmail.com',
//      'pbb7c@virginia.edu']
//  }