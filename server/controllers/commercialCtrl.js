module.exports = {
    
    getCommercial: async (req, res, next) => {
        const db = req.app.get('db')
        const resp = await db.get_commercial();

        res.status(200).send(resp)
    },

    addCommercial: (req, res, next) => {
        const db = req.app.get('db')
        const {first_name, last_name, address, city, state, zipcode, business_type, user_id} = req.body
        db.add_commercial([first_name, last_name, address, city, state, zipcode, business_type, user_id]).then(auto => { res.status(200).send(auto)
        })
     },

     editCommercial: async (req, res, next) => {
         const db = req.app.get('db')
         const id = parseInt(req.params.id)
         const{first_name, last_name, address, city, state, zipcode, business_type, user_id} = req.body
         db.edit_commercial([id, first_name, last_name, address, city, state, zipcode, business_type, user_id]).then(() =>{ res.status(200).send(`updated auto insurance with ${id}`) })
     }

}