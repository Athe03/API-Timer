const port = 3000

const serveur = async(app) => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (erreur) {
        console.error("Erreur serveur : ", erreur);
    }
}

module.exports = {serveur};