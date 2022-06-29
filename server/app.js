const express = require('express');
const db = require('./database')
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get('/registro', async (req, res) => {
    try {

        const sql = "SELECT * FROM registro ORDER BY id DESC LIMIT 200";

        db.query(sql, (err, result) => {
            if (err) throw err;
            if (result.length>0){
                res.status(200).json(result);
            } else {
                res.status(200).json('No results');
            }
        })

    } catch (e) {
        console.log(e.message);
        res.status(500).send(e.message);
    }
})

app.get('/lastregistro', async (req, res) => {
    try {

        const sql = "SELECT * FROM registro WHERE id = (SELECT MAX(id) FROM registro)";

        db.query(sql, (err, result) => {
            if (err) throw err;
            if (result.length>0){
                res.status(200).json(result);
            } else {
                res.status(200).json('No results');
            }
        })

    } catch (e) {
        console.log(e.message);
        res.status(500).send(e.message);
    }
})

app.get('/weekregistro', async (req, res) => {
    try {

        const sql = "SELECT CAST(fecha as DATE) as fecha, ROUND(AVG(temperatura),2) as temperatura FROM registro WHERE CAST(fecha AS DATE) > DATE(NOW() - INTERVAL 7 DAY) GROUP BY CAST(fecha as DATE) ORDER BY CAST(fecha as DATETIME) DESC";

        db.query(sql, (err, result) => {
            if (err) throw err;
            if (result.length>0){
                res.status(200).json(result);
            } else {
                res.status(200).json('No results');
            }
        })

    } catch (e) {
        console.log(e.message);
        res.status(500).send(e.message);
    }
})

app.get('/devfill', async (req, res) => {
    try {
        for (let i=0; i<500; i++){
            let temperatura = (Math.random() * (28 - 2) + 2).toFixed(2);
            let rnd = Math.floor(Math.random() * 10) + 1;
            let rnddt = Math.floor(Math.random() * 24);
            let rndday = Math.floor(Math.random() * 30) + 1;
            let sonido = "";
            if (rnd <= 2){
                sonido = "high";
            } else {
                sonido = "low";
            }
            const sql = `INSERT INTO registro(temperatura, sonido, fecha) VALUES (${temperatura}, '${sonido}', '2022-06-${rndday} ${rnddt}:00:00')`;

            db.query(sql, (err) => {
                if (err) throw err;
            })
        }

    } catch (e) {
        console.log(e.message);
        res.status(500).send(e.message);
    }
})

db.connect(error => {
    if (error) throw error;
    console.log('Connected to MySQL database');
})

app.listen(5000, () =>{
    console.log('Express server has started on port 5000')
})