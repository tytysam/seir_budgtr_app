const React = require("react");
const Layout = require("./components/Layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <table>
          {this.props.budgets.map((budget, index) => {
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
