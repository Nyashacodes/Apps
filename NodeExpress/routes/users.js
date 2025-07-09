import express from 'express';

const router = express.Router(); //initialize the router

const users = [
{
    firstName: "Nyasha",
    lastName : "Gupta",
    age:25
},
{
    firstName:"Lydia",
    lastName:"Hallie",
    age:26
}
]

//all routers in here are starting with /users
router.get('/', (req,res)=>{
    console.log(users);    
    res.send("Hello User");
});

router.post('/',(req,res)=>{    
    console.log('POST route Reached !');

    res.send("post route reached")
});

export default router;