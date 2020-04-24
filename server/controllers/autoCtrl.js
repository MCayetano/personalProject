module.exports = {
    
    getAuto: async (req, res, next) => {
        const db = req.app.get('db')
        const resp = await db.get_auto();

        res.status(200).send(resp)
    },

    addAuto: (req, res, next) => {
        const db = req.app.get('db')
        const {address, year, make, model, vin_id, user_id} = req.body
        db.add_auto([address, year, make, model, vin_id, user_id]).then(auto => { res.status(200).send(auto)
        })


        
    }


}









// app.get('/api/auto', getAuto);
// app.post('/api/auto', addAuto);
// app.put('/api/auto/:id', editAuto);
// app.delete('/api/auto/:id', deleteAuto);