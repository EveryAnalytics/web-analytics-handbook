const path = require('path');

/**
 * {@link} https://isamrish.medium.com/update-react-component-state-on-every-route-change-in-docusaurus-d4f36f87a497
 */
module.exports = function (context) {
  return {
    name: 'route-plugin',
    getClientModules() {
      return [path.resolve(__dirname, './route')];
    },
  };
};
