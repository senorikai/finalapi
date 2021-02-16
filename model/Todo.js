const r = require('../config')

module.exports = {
   
    insert:async(data) => {
      let result =  await r.table('ToDoList').insert({
                todo_name:data.todo_name,
                userId:data.userId}).run()

        return result
    }
}