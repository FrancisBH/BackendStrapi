module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'francis.bh.4264@gmail.com',
        defaultReplyTo: 'francis.bh.4264@gmail.com',
        testAddress: 'francis_bh_x3_464@hotmail.com',
      },
    },
  },
  // ...
});