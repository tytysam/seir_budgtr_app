const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>My Budgtr App</title>
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = Layout;
