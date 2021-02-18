const r = require('../config')

module.exports = {
   
    insert:async(data) => {
        console.log(data)
      let result =  await r.table('ToDoList').insert({
                todoname:data.todoname,
                userId:data.userId}).run()

        return result
        
    },

    getAll: () => {
        // return r.table('ToDoList').orderby('todoname').run()
        return r.table('ToDoList').run()
    },

    delete: (id) => {
          return r.table('ToDoList').get(id).delete().run()
      },
    
     update: (id) => {
        return r.table('ToDoList').get(id).delete().run()
     }
}