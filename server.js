const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5001;
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://picsum.photos/id/236/40/60',
            'name': 'Kim',
            'birthday': '980413',
            'gender': 'female',
            'job': 'developer'
          },
          {
            'id': 2,
            'image': 'https://picsum.photos/id/237/40/60',
            'name': 'Gwon',
            'birthday': '991213',
            'gender': 'male',
            'job': 'athlete'
          },
          {
            'id': 3,
            'image': 'https://picsum.photos/id/238/40/60',
            'name': 'Yoo',
            'birthday': '666666',
            'gender': 'female',
            'job': 'mom'
          }
    ]);
});

app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));