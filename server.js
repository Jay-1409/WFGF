const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  console.log('Webhook received!');
  console.log('Payload:', req.body);

  res.status(200).send('Webhook received!');
});

app.listen(PORT, () => {
  console.log(` Webhook server listening at http://localhost:${PORT}`);
});
