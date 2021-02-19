const r = require('../config')

module.exports = {
   
    insert:async(data) => {
        console.log("sdsd",data)
      let result =  await r.table('ToDoList').insert({
                todoname:data.todoname,
                userId:data.userId}).run()

        return result
        
    },

    getAll: (user_id) => {
        // return r.table('ToDoList').orderby('todoname').run()

        return r.table('ToDoList').filter({userId:user_id}).run()
    },

    delete: (id) => {
          return r.table('ToDoList').get(id).delete().run()
      },
    
    update: (id,todoname) => {
        return r.table('ToDoList').get(id).update({todoname: todoname}).run()
     },

    // getTodo: (id) => {
    //     return r.table('TodoList').get(id).run()
    // }
}