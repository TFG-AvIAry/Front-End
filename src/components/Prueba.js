const { MongoClient } = require('mongodb');

// Reemplaza la cadena de conexión con la que obtuviste de MongoDB Atlas
const uri = 'mongodb+srv://example:12345@birds.3qoysym.mongodb.net/Birds?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Conectado a la base de datos');
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
  }
}

module.exports = { connectToDatabase, client };