const Dotenv = require('dotenv-webpack');

const DOTENV_DEFAULT_OPTIONS = {
  path: './.env',
  safe: true,
  allowEmptyValues: false,
  systemvars: false,
  silent: false,
  expand: false,
  defaults: false,
};

module.exports = () => {
  return {
    name: 'evn-setting',
    configureWebpack(config, isServer) {
      return {
        plugins: [new Dotenv(DOTENV_DEFAULT_OPTIONS)],
      };
    },
  };
};
