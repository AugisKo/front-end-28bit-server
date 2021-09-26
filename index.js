const server = require('./lib/server');

const app = {}

app.init = () => {
    // paruosti reikiamus direktorijas
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'barsukas',
    });
    
    // paruosti reikiamus direktorijas
    
    // paruosti reikiamus failus

    // inicijuojame serveri
    server.init(connection);
}

app.init();

module.exports = app;
