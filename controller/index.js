const router = require('express').Router();
const userModel = require('../model')


router.post('/login', async (req,res)=>{
   
    try {
        let result = await userModel.login({email,username,password} = req.body)
        // console.log('reareare',result);
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

        let result =  await userModel.register({email,username} = req.body)

        console.log(result)

        if(result.length>0){

            res.json({Type:'Error',Message:'Username already exists'});

        }else{

            let result = await userModel.insert({username,password} = req.body)
            if(result) res.json({Type:'Success',Payload:result})
           
        }
        
    } catch (error) {
        res.json({Type:'Error',Message:"Internal Server Error"});
    }
    
            
             
})

module.exports = router;
