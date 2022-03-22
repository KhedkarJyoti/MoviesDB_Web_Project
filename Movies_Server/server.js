const http            = require('http');
const app             = require('./app.js'); 
const globalVariable  = require('./nodemon.js');
const PORT            = globalVariable.port;

/* Create Server */
const server = http.createServer(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});