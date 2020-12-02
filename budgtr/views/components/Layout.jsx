const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>My Budgtr App</title>
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
          <nav>
            <a href="/budgets">HOME</a>
          </nav>
          <h1>Budgtr</h1>

          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;
