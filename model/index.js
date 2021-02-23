const r = require('../config')

module.exports = {
    login: async (data) => {
        const result = await r.table('users')
            .filter(r.row('email').eq(data.email))
            .run()

        return result
    },

    insert: async (data) => {
        const result = await r.table('users').insert({
            email: data.email,
            username: data.username,
            password: data.password
        }).run()

        return result
    },

    checkuser_exist: async (data_email, data_username) => {
        const result = await r.table('users').filter(r.row("email").eq(data_email).and(r.row("username").eq(data_username)))
        return result
    }

}