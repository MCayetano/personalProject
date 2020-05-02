module.exports = {
    
    getAuto: async (req, res, next) => {
        const db = req.app.get('db')
        const resp = await db.get_auto();

        res.status(200).send(resp)
    },

    addAuto: (req, res, next) => {
        const db = req.app.get('db')
        const {first_name, last_name, address, year, make, model, vin_id, user_id} = req.body
        db.add_auto([first_name, last_name, address, year, make, model, vin_id, user_id]).then(auto => { res.status(200).send(auto)
        })
     },

     editAuto: async (req, res, next) => {
         const db = req.app.get('db')
         const id = parseInt(req.params.id)
         const{first_name, last_name, address, year, make, model, vin_id, user_id} = req.body
         db.edit_auto([id, first_name, last_name, address, year, make, model, vin_id, user_id]).then(() =>{ res.status(200).send(`updated auto insurance with ${id}`) })
     },

     deleteAuto: async (req, res, next) => {
            const db = req.app.get('db')
            const id = parseInt(req.params.id)
            db.delete_auto([id]).then(() =>{ res.status(200).send(`deleted auto insurance with ${id}`) })
    }

}




// app.put('/api/auto/:id', editAuto);
// app.delete('/api/auto/:id', deleteAuto);