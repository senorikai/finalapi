const express = require('express');
const app = express();
const user = require('./controller');
const port = 3231;

app.use(express.json());
app.use(user)


app.listen(port, () => {
    console.log('server listening at port 3000.')
})


