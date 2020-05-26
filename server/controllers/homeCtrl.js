module.exports = {
    
    getHomes: async (req, res, next) => {
        const db = req.app.get('db')
        const {user_id} = req.session.user || null;
        const resp = await db.get_homes([user_id]);

        res.status(200).send(resp)
    },

    addHomes: (req, res, next) => {
        const db = req.app.get('db')
        const {user_id} = req.session.user
        const {address, city, state, zip} = req.body
        db.add_homes([address, city, state, zip, user_id]).then(homes => { res.status(200).send(homes)
        })

     },

     editHomes: async (req, res, next) => {
        const db = req.app.get('db')
        const {user_id} = req.session.user
        const {city, state, zip} = req.body
        const {address} = req.params
        db.add_homes([address, city, state, zip, user_id]).then(() => { res.status(200).send(`updated home insurance with ${user_id}`)})
    },

    deleteHomes: async (req, res, next) => {
        const db = req.app.get('db')
        const {user_id} = req.session.user;
        db.delete_homes([user_id]).then(() =>{ res.status(200).send() })
    }


} 