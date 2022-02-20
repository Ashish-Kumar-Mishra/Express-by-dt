/*                                     Express                                     */

const { application } = require("express");

// Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features.
// It makes it easier to organize your application’s functionality with middle ware and routing;
//  it adds helpful utilities to Node.js’s HTTP objects;it facilitates the rendering of dynamic HTTP objects.

// Express is a part of MEAN stack, a full stack JavaScript solution used in building fast, robust, and maintainable production web applications.

// The definition of express is something that has a specific purpose or something that operates at a faster - than - normal speed.
// An example of express is when the purpose to go to a store is just to buy milk.
// An example of express is a train that gets you where you are going five times faster than other trains.





/*                          important!!  for express                                */

// your http server is created easily with express.
// if you compare this code given below the node http server  
//  you will notice we just write few lines in express to create http server 

// const express =require('express')
// const app =express();

// app.get('/ping',(req,res)=>{
//     // res.send('Pong');
//     res.send('Express application');
// });
// app.listen(3000,()=>{
//     console.log('listening to port 3000');
// })


/*                       Middliware                                                  */

/*const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
    console.log("LOGGED");
    next();
}
// another middleware
const requestTime =function(req,res,next){
    req.requestTime=Date.now()
    next();// it tells the middleware to moves to next middleware because the process of current middleware function is finished
}

app.use(myLogger);
app.use(requestTime)

app.get('/', (req, res) => {
    res.send(`Current Time:${req.requestTime}`)
})
// or is same through function or callback 
// app.get('/', function (req, res) {
//     res.send('Home Route')
// })

app.listen(3000, () => {
    console.log('app started on port 3000');
})
*/

/*                       Serving the static files                                                */

// const express = require('express');
// const path = require('path');

// const app = express();

// const publicpath = path.resolve(__dirname, 'public')

// app.use(publicpath, express.static('static'));

// <img src="public/img_girl.jpg"></img>

// app.get('/', (req, res) => {
//     res.send('Static files')
// });
// app.listen(3000, () => {
//     console.log('App Started on port 3000');
// })

/*                       Routing with express                                               */
/*const express=require('express')
const app=express();

const port=3000;

const data={
    id:1,
    name:"india"
}

app.get('/',(req,res)=>{
    res.end('welcome to my homepage')
})
app.get('/about',(req,res)=>{
    res.send('welcome to my aboutpage')
})
app.get('/weather',(req,res)=>{
    // res.send(data)
    // res.json(data)
    res.sendFile('/static/index.html')
})
app.listen(port,()=>{
    console.log(`server is listening to ${port}`);
})*/

 /*                       Views                                              */
// const express=require('express');
// const app =express();
// const port=3000;

// app.set('view engine',"pug")

// app.get('/',function(req,res){
// res.render('index',{title:'Express view Engine',h1:"Express",p:"Express Template Engine"})
// }).listen(port,()=>{
//     console.log(`server started on ${port}`);
// })

/*
//  advance topics
Session
cookies
core Mddleware
core routing 
build own api
core views
Database integration
 */ 

 /*                       mongoDB integratio                                            */
//  {
//     _id:10,
//      username:'peter',
//      email:['pbbakum@gmail.com',
//      'pbb7c@virginia.edu']
//  }
