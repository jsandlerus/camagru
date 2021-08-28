const express = require('express');
const connectDB = require('./config/db');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

connectDB();

app.use(express.static(path.join(__dirname, './client/build')));

//Initialize Middleware
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/profile/api/auth', require('./routes/api/auth'));
app.use('/profile/api/users', require('./routes/api/users'));
app.use('/favorites/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

//Heroku Scripts
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));