module.exports = ({ env }) => ({
    graphql: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      disabledPlugins: [],
      disabledExtensions: [],
      apolloServer: {
        tracing: false,
      },
    },
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: 'eu-west-3',
        params: {
          Bucket: 'gabrielbrunresume',
        },
      },
    },
  });