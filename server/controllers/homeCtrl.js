module.exports = {
    
    getHomes: async (req, res, next) => {
        const db = req.app.get('db')
        const resp = await db.get_homes();

        res.status(200).send(resp)
    },

    addHomes: (req, res, next) => {
        const db = req.app.get('db')
        const {first_name, last_name, address, apt, city, state, zipcode, user_id} = req.body
        db.add_auto([first_name, last_name, address, apt, city, state, zipcode, user_id]).then(auto => { res.status(200).send(auto)
        })


     }


} 