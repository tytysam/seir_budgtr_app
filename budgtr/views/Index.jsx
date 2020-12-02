const React = require("react");
const Layout = require("./components/Layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <a href="/budgets/new" className="new-item-link">
          <p className="new-item">(add a new item...)</p>
        </a>
        <h2 className="money-display">
          Currently in the bank: {this.props.totalMoney}
        </h2>
        <table>
          {this.props.budgets.map((budget, index) => {
            // CAN DO THIS^ BECAUSE WE PASSED the budgets object as PROPS in our server.js
            return (
              <tr>
                <td>{budget.date}</td>
                <td>
                  <a href={`/budgets/${index}`}>{budget.name}</a>
                </td>
                <td>{budget.from}</td>
                <td>{budget.amount}</td>
              </tr>
            );
          })}
        </table>
      </Layout>
    );
  }
}

module.exports = Index;
