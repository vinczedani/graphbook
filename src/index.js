require('dotenv').config();
const { connection } = require('./database');
const server = require('./server');

async function start() {
  await connection;

  const { url } = await server.listen();

  console.log(`Server is running on ${url}`);
}

start();
