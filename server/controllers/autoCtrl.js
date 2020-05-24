module.exports = {
    
    getAuto: async (req, res, next) => {
        const db = req.app.get('db')
        const {user_id} = req.session.user || null;
        const resp = await db.get_auto([user_id]);

        res.status(200).send(resp)
    },

    addAuto: (req, res, next) => {
        const db = req.app.get('db')
        const {user_id} = req.session.user
        const {license, year, make, model, vin} = req.body
        db.add_auto([license, year, make, model, vin, user_id]).then(auto => { res.status(200).send(auto)
            // .then(auto => { res.status(200).send(auto)
        })
     },

     editAuto: async (req, res, next) => {
         const db = req.app.get('db')
         const {user_id} = req.session.user
         const {license, year, make, model} = req.body
         const {vin} = req.params
         db.edit_auto([license, year, make, model, vin, user_id]).then(() => { res.status(200).send(`updated auto insurace with ${user_id}`)})
     },

     deleteAuto: async (req, res, next) => {
            const db = req.app.get('db')
            const {user_id} = req.session.user;
            db.delete_auto([user_id]).then(() =>{ res.status(200).send() })
    }

}




// app.put('/api/auto/:id', editAuto);
// app.delete('/api/auto/:id', deleteAuto);