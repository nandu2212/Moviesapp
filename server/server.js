const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors')
const app=express();

app.listen(3300,()=>{
    console.log('port listened')
})

// middle ware
app.use(express.json());
app.use(express.urlencoded(false));
app.use(cors());

mongoose.connect('mongodb+srv://imdb:imdb@insta.nq8vq89.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log('db connected')
})

// Schema established
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

// register

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    const array=email.split("@gmail.com");
    if(array.length !=2){
        res.send('invalid email')
    }else{ 
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
} 
}) 

// login
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.status(200).send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 
