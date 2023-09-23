module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('MYSQLHOST', 'containers-us-west-194.railway.app'),
      port: env.int('MYSQLPORT', 5770),
      database: env('MYSQLDATABASE', 'railway'),
      user: env('MYSQLUSER', 'root'),
      password: env('MYSQLPASSWORD', 'ItgU0eHRBs3FrUCBB2SD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
