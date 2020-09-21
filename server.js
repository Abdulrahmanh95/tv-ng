const express = require('express');

const app = express();

app.use(express.static('./dist/timeviewer-clinic'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: 'dist/timeviewer-clinic/'}
  );
});

app.listen(process.env.PORT || 8080);
