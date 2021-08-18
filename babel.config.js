module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset'),[
    "@babel/preset-react",
    { "runtime": "automatic", "importSource": "@emotion/react" }
  ]],
  plugins: ["@emotion/babel-plugin", [
    "module-resolver",
    {
      "root": ["./src/"],
      "extensions": [".ts", ".tsx", ".js", ".jsx"]
    }
  ]]
};
