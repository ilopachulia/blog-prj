const express = require('express');

const app = express();

app.get('/account', (req, res) => {
    console.log( '..................................',req);
    res.send('Account data');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
