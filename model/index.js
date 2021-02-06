const r = require('../config')

module.exports = {
    login: async (data) => {
        // console.log('modleefdsfdsf',data);
       let result = await r.table('users')
                    .filter(r.row('email').eq(data.email))
                    .filter(r.row('username').eq(data.username))
                    .filter(r.row('password').eq(data.password))
                    .run()
        return result
    },
    register:(data) => {
    
        let result = r.table('users')
                    .filter(r.row('email').eq(data.email))
                    .filter(r.row('username').eq(data.username))
                    .run()

        return result


    },
    insert:async(data) => {
      let result =  await r.table('users').insert({
                email:data.email,
                username:data.username,
                password:data.password}).run()

        return result
    }
}