const React = require("react");
const Layout = require("./components/Layout.jsx");

class Show extends React.Component {
  render() {
    const budget = this.props.budget;
    return (
      <Layout>
        <hr></hr>
        <h1 className="subtitle">{budget.name}</h1>
        <h2>DATE:</h2>
        <h3>{budget.date}</h3>
        <h2>FROM:</h2>
        <h3>{budget.from}</h3>
        <h2>AMOUNT:</h2>
        <h3>${budget.amount}</h3>
      </Layout>
    );
  }
}

module.exports = Show;
