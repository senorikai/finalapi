const router = require('express').Router();
const userModel = require('../model')


router.post('/login', async (req, res) => {
    try {
        const result = await userModel.login({ email, username, password } = req.body)
        if (result.length > 0 && result[0].password === password && result[0].username === username) {
            res.json({ Type: 'Success', Message: 'Successfully Loggedin', Payload: result[0].id });
        } else {
            res.json({ Type: 'Error', Message: 'Credentials not found!' });
        }
    } catch (error) {
        console.log(error)
        res.json({ Type: 'Error', Message: "Internal Server Error" });
    }

});


router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body
        const result1 = await userModel.checkuser_exist(email, username)
        if (result1.length == 0) {
            const result = await userModel.insert({ email, username, password })
            if (result) res.json({ Type: 'Success', Payload: result })
        } else {
            res.json({ Type: 'Error', Message: 'Username already exists' });
        }

    } catch (error) {
        console.log(error);
        res.json({ Type: 'Error', Message: "Internal Server Error" });
    }

})


module.exports = router;
