const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//iniciando aplicação:
const app = express();
app.use(express.json());

//db
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(
    /* "mongodb://192.168.99.100:27017/nodeapi" */
    "mongodb://localhost:27017/nodeapi"
);
requireDir('./src/models');

const Product = mongoose.model('Product');

//rotas:

/* app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com.br/facebook/react-native'
    })
    res.send('API rodando...')
}); */
app.use('/api', require("./src/routes"));

app.listen(3001);