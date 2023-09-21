module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '99.000webhost.io'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'id19844630_amigotours'),
      user: env('DATABASE_USERNAME', 'id19844630_root'),
      password: env('DATABASE_PASSWORD', 'qqwe1123Q@'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
