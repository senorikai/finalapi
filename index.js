const express = require('express');
const app = express();
const user = require('./controller');
const todo = require('./controller/Todo');
const port = 3231;


app.use(express.json());
app.use(user)
app.use(todo)


app.listen(port, () => {
    console.log('server listening at port 3000.')
})


