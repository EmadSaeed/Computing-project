import express from 'express';
import products from './data/dummy-data.js';
const port = 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('This is monolithic-application-server!');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((item) => item._id === req.params.id);
    res.json(product);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
