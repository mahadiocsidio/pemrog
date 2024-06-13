const { host, port } = require('./config/application');
const app = require('./app');

// Start the server
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
