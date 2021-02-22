const router = require('express').Router();
const userModel = require('../model/Todo')

router.post('/insert', async (req,res) => {
    try {
            let result = await userModel.insert({todoname,userId} = req.body)
            if(result) res.json({Type:'Success',Payload:result})
        }
            catch (error) {
                res.json({Type: 'Error', Message: "Internal Server Error"});
            }
})

router.get('/users/:userId/todos', async (req,res) => {
    const datas = await userModel.getAll(req.params.userId);
    res.send(datas);
})

router.post('/deleteTask/:taskId', async (req,res) => {
    const taskId = req.params.taskId
    try {
        const result = await userModel.delete(taskId)
        return res.send(result)
    }
    catch (error) {
    }
})

router.post('/TodoUpdate', async(req,res) => {
    try {
        const {id,todoname} = req.body
        const data = await userModel.update(id,todoname);
        res.send(data);
    }
    catch (error) {
    }
})


module.exports = router;