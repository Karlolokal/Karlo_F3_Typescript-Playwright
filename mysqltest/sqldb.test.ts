import mysql from 'mysql2/promise';
async function run() {
    const connection = await mysql.createConnection({
        host: 'backoffice-iglobis-qa-db-usa.backoffice.npr.aws.asurion.net',
        user: 'svc.US-q-IGLOBIS',
        password: 'TAM7NU5R',
        database: 'iglobis',
        port: 3330
});
    const query = await connection.execute('Select * from Invoice limit 10;');
    console.log(query);
}
run();