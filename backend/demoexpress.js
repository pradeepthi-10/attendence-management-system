
const express = require('express');
const app = express();
let users = [];
app.use(express.json());
app.get('/ace', (req, res) => {
    res.send("hello ace world");
});

 app.get('/', (req, res) => {
     res.send('hello root');
});

// app.listen(3000, () => {
//     console.log('server is running on port 3000');
// });
app.post("/users",(req,res)=>{
    //console.log(req.body);
    users.push(req.body);
    res.json({ message:'user data recieved'});

});
app.post("/users",(req,res)=>{
    const user =req.params.id;
    console.log(user);
    res.json({message:'user ID is ${user}'});
})
app.get("/users/:id",(req,res)=>{
    const user =req.params.id;
    console.log(user);
    res.json({message:'user ID is ${user}'});
});
//put is used to update and delete is used to delete
//patch ->update specific data
app.put("/users/:id",(req,res)=>{
    const user =req.params.id;
    console.log(user);
    res.json({message:'user ID is ${user}'});
});


app.listen(3000,()=>{
    console.log('server is running on port 3000');
})
