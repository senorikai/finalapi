const router = require('express').Router();
const userModel = require('../model')


router.post('/login', async (req,res)=>{
    try {
        let result = await userModel.login({email,username,password} = req.body)
        if(result.length>0){
                res.json({Type:'Success',Message:'Successfully Loggedin',Payload:result});
        }else{
                res.json({Type:'Error',Message:'Credentials not found!'});
        }
    } catch (error) {
        res.json({Type:'Error',Message:"Internal Server Error"});
    }  
});


router.post('/register', async (req,res) => {
    try {
        const result1 = await userModel.checkuser_exist(req.body.email,req.body.username)
        console.log("pup",result1)
        if(result1.length==0){
            let result = await userModel.insert({username,password} = req.body)
            if(result) res.json({Type:'Success',Payload:result})
        }else{
            res.json({Type:'Error',Message:'Username already exists'});
        }
        
    } catch (error) {
        console.log(error);
        res.json({Type:'Error',Message:"Internal Server Error"});
    }                 
})


module.exports = router;
