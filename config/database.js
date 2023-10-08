module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('MYSQLHOST', 'containers-us-west-123.railway.app'),
      port: env.int('MYSQLPORT', 7034),
      database: env('MYSQLDATABASE', 'railway'),
      user: env('MYSQLUSER', 'root'),
      password: env('MYSQLPASSWORD', 'ZWX5n3iUsJCHQWbmZ8On'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
