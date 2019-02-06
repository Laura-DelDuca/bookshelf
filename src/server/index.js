/* becodeorg/bookshelf
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 * code oli
 */

import express from "express";
import path from "path";
// bodyparser install
const bodyParser = require("body-parser");
// utilisation du middleware bodyparser mais sur tout le body
// app.use(bodyParser.urlencoded({ extended:false}))
const {APP_PORT} = process.env;
const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

// ajout de livres
const newBook = {
    title: req.body.booktitle,
    year: req.body.bookyear,
};

allBook = [...allBook, newBook];
/* il faut avoir un formulaire en methode post
    dans la react j'accede au post avec node
*/
// on recupere le idleware dans une variable

// recupere une donnée specifique ajouter le middleware avec une varible specifique
let urlencodedParser = bodyParser.urlencoded({extended: false});
// le middleware urlencodedParser entre en action uniquement sur app.post/hello

app.post("/hello", urlencodedParser, (req, res) => {
    console.log(req, body);
    res.sendStatus(201);
});
