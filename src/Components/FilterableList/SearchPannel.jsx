import List from "./List";
import { Component } from "react";
import MOVIES from "./data.json";

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
    return MOVIES.filter((item) => {
      if (overSeven) {
        if (item.rate > 7) {
          return item.name.toLowerCase().includes(keyword.toLowerCase());
        } else {
          return false;
        }
      } else {
        return item.name.toLowerCase().includes(keyword.toLowerCase());
      }
    });
  }

  render() {
    const { keyword, overSeven } = this.state;
    const arr = this.filteredItems(keyword, overSeven).map((item) => ({ text: item.name, id: item.id }));

    return (
      <div>
        <h1>Filterable List</h1>
        <div>
          <div>Keyword</div>
          <input type="text" value={keyword} onChange={this.handleKeywordChange} />
        </div>
        <div>
          <span>Only over 7.0</span>
          <input type="checkbox" checked={overSeven} onChange={this.handleOverSevenChange} />
        </div>
        <List items={arr} />
      </div>
    );
  }
}
