const r = require('../config')

module.exports = {
   
    insert:async(data) => {
      let result =  await r.table('ToDoList').insert({
                todo_name:data.todo_name,
                userId:data.userId}).run()

        return result
        
    },

    view:async() => {
        let result =  r.table('users').coerceTo('array').run()
//   console.log("dfssdfd", result)

          return result;
          
      }
}