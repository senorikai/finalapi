const router = require('express').Router();
const userModel = require('../model/Todo')

router.post('/tasks', async (req, res) => {
    try {
        const result = await userModel.insert({ todoname, userId } = req.body)
        if (result) res.json({ Type: 'Success', Payload: result })
        console.log("payload", Payload.result)
    }
    catch (error) {
        res.json({ Type: 'Error', Message: "Internal Server Error" });
    }
})

router.get('/users/:userId/todos', async (req, res) => {
    try {
        const datas = await userModel.getAll(req.params.userId);
        res.send(datas);
    } catch (error) {
        res.json({ Type: 'Error', Message: "Internal Server Error" });
    }
})

router.delete('/tasks/:taskId', async (req, res) => {
    const taskId = req.params.taskId
    try {
        const result = await userModel.delete(taskId)
        return res.send(result)
    }
    catch (error) {
        // res.status(500);
        res.json({ Type: 'Error', Message: "Internal Server Error" });
    }
})

router.put('/tasks', async (req, res) => {
    try {
        const { id, todoname } = req.body
        const data = await userModel.update(id, todoname);
        res.send(data);
    }
    catch (error) {
        // res.status(500)
        res.json({ Type: 'Error', Message: "Internal Server Error" });

    }
})


module.exports = router;