module.exports = {
    getAll: (req, res) => {
        const db = req.app.get(`db`);
        db.get_all().then(response => {
            res.status(200).send(response)
        }).catch(err=>console.log(err))
    }
}