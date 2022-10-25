const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const voituresObject = { "voitures": [
	"{\"id\":1,\"marque\":\"Citroën\",\"modele\":\"C4 Picasso\",\"finition\":\"Feel\",\"carburant\":\"DIESEL\",\"km\":78000,\"annee\":2017,\"prix\":15500}",
	"{\"id\":2,\"marque\":\"Peugeot\",\"modele\":\"3008\",\"finition\":\"Allure\",\"carburant\":\"DIESEL\",\"km\":4,\"annee\":2020,\"prix\":38000}",
	"{\"id\":3,\"marque\":\"Renault\",\"modele\":\"Mégane\",\"finition\":\"Dynamique\",\"carburant\":\"ESSENCE\",\"km\":133000,\"annee\":2007,\"prix\":3100}",
	"{\"id\":4,\"marque\":\"Opel\",\"modele\":\"Corsa\",\"finition\":\"Elegance\",\"carburant\":\"ESSENCE\",\"km\":140,\"annee\":0,\"prix\":0}",
	"{\"id\":5,\"marque\":\"Audi\",\"modele\":\"R8\",\"finition\":\"Black edition\",\"carburant\":\"ESSENCE\",\"km\":68000,\"annee\":2009,\"prix\":50000}"
]};

app.get('/esieaBack/rest/voiture/get/all', (req, res) => {
	res.send(JSON.stringify(voituresObject))
})

app.get('/esieaBack/rest/voiture/get/all/:mini/:nbVoitures', (req, res) => {
	res.send(JSON.stringify({ "voitures" :voituresObject.voitures.slice(0,req.params.nbVoitures <= voituresObject.voitures.length ? req.params.nbVoitures : voituresObject.voitures.length) }))
})

app.get('/esieaBack/rest/voiture/get/:id', (req, res) => {
	const voiture = { "voiture": voituresObject.voitures[req.params.id-1]}
	voiture.volume=1;
	res.send(JSON.stringify(voiture));
})

app.listen(3000)