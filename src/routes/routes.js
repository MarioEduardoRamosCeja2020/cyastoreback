const { Router } = require('express');
const express = require('express');
const req = require('express/lib/request');
const routes = express.Router();






routes.get('/', (app, res) => {
    app.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("SELECT * FROM products WHERE sex='male'", (err, rows) => {
            if (err) return res.send(err);
            res.json(rows);
        });
    })
});


// routes.post('/', (app, request) => {
//     console.log(request.req.body)
//     app.getConnection((err, conn)=>{
//             if(err) return request.send(err)
//             conn.query('INSERT INTO users set ?', [request.req.body], (err, rows)=>{
//                 if(err) return request.send(err)

//                 request.send('user added!')
//             })
//         })
// });



module.exports = routes;