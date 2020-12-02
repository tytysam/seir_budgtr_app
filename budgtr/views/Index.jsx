const React = require("react");
const Layout = require("./components/Layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    );
  }
}

module.exports = Index;
