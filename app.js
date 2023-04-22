
const express = require('express');
const exphbs = require('express-handlebars')
const db = require('./db/conn')
const app = express();

//Autor Geovane Araujo

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
  })

app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars');


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static('public'));  

 
app.use('/',require('./routes/routerProduto'));
  
  db
    .sync()
    .then(() => {
      app.listen(3000)
      console.log('Server Started')
    })
    .catch((err) => {
      console.log(err)
    })
  