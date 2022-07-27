import { Component } from "react";
import List from "./List";

export default class SearchPannel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      overSeven: false,
    };
  }

  handleKeywordChange = (e) => {
    this.setState({ keyword: e.target.value });
  };

  handleOverSevenChange = (e) => {
    this.setState({ overSeven: e.target.checked });
  };

  filteredItems(keyword, overSeven) {
    return this.props.movies
      .filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase()))
      .filter((item) => (overSeven ? item.rate > 7 : true));
  }

  render() {
    const { keyword, overSeven } = this.state;

    const arr = this.filteredItems(keyword, overSeven).map((item) => ({ text: item.name, id: item.id }));

    return (
      <div className="container">
        <div className="container-fluid bg-light p-5">
          <h1>Filterable List</h1>
          <div>
            <div>Keyword</div>
            <input className="form-control" type="text" value={keyword} onChange={this.handleKeywordChange} />
          </div>
          <div className="form-check">
            <span className="form-check-label">Only over 7.0</span>
            <input className="form-check-input" type="checkbox" checked={overSeven} onChange={this.handleOverSevenChange} />
          </div>
          <List items={arr} />
        </div>
      </div>
    );
  }
}
