const Teacher=require("../models/teacher");

const login = async (req, res,next) => {
    const { email, name } = req.body;
    
    const user=await Teacher.findOne(
        {email},
    ); 

    if(user){
        console.log('USER FOUND',user);
        res.json(user)
    }
    else{
        
        const newUser=await new Teacher({
            email,
        })
        .save();
        console.log('USER CREATED',newUser);
        res.json(newUser); 
    }
};
module.exports={login}