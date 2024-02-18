import mysql from 'mysql2/promise';
async function run() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: '',
        password: '',
        database: '',
        port: 3330
});
    const query = await connection.execute('Select * from Invoice limit 10;');
    console.log(query);
}
run();