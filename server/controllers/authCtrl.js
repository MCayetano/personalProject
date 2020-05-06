const bcrypt = require('bcrypt')
const {v4} = require('uuid')

module.exports = {
    register: async (req, res) => {
        try {
            const db = req.app.get('db')
            let { name, email, password, is_admin } = req.body
    
            let users = await db.auth.find_user_by_email(email)
            let user = users[0]
            
            if (user) {
                return res.status(409).send('email already exists')
            }
          

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            let response = await db.auth.create_user({ name, email, hash, is_admin })
            let newUser = response[0]
    
            delete newUser.password
    
            req.session.user = newUser
            res.send(req.session.user)
            
        } catch (error) {
            console.log('error', error)
            res.status(500).send(error)
        }
    },
    login: async (req, res) => {
        try {
            const db = req.app.get('db')
            let { email, password } = req.body

            let users = await db.auth.find_user_by_email(email)
            let user = users[0]
    
            if (!user) {
                return res.status(401).send('email or password incorrect')
            }

            let isAuthenticated = bcrypt.compareSync(password, user.password)

            if (!isAuthenticated) {
                return res.status(401).send('email or password incorrect')
            }

            
            delete user.password
            req.session.user = user
            res.send(req.session.user)
            
        } catch (error) {
            console.log('there was an error', error)
            res.status(500).send(error)
        }

    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    getUser: (req, res) => {
        try {
            res.status(200).send(req.session.user)
        } catch (error) {
            console.log('cannot get user', error)
            res.status(500).send('no user')
        }
    }
}