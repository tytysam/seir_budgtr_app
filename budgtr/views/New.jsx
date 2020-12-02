const React = require("react");
const Layout = require("./components/Layout.jsx");

class New extends React.Component {
  render() {
    return (
      <Layout>
        <h1 className="subtitle">Add a new item</h1>
        {/* NOTE: ACTION will be the ROUTE, METHOD will be the HTTP verb (from REST) */}
        <form action="/budgets/" method="POST">
          {/* NOTE: LISTEN for a request at /budgets, and make sure that that request is of POST method (which will tell our server to look for a POST request) */}
          Name: <input type="text" name="name" />
          <br />
          Date: <input type="text" name="date" />
          <br />
          Amount: <input type="text" name="amount" />
          <br />
          From: <input type="text" name="from" />
          <br />
          <input type="submit" name="" value="Add Item" />
        </form>
      </Layout>
    );
  }
}

module.exports = New;
