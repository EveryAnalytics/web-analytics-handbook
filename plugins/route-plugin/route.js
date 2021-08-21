import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

/**
 * {@link} https://isamrish.medium.com/update-react-component-state-on-every-route-change-in-docusaurus-d4f36f87a497
 */
export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }
  let event = new Event('onRouteUpdated');
  return {
    onRouteUpdate() {
      document.dispatchEvent(event);
    },
  };
})();
