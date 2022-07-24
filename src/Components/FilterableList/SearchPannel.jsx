import List from "./List";
import { Component } from "react";
import MOVIES from "./data.json";

export default class SearchPannel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      overSeven: false,
      movies: MOVIES,
    };
  }

  handleKeywordChange = (e) => {
    const filteredItems = this.state.movies.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({ keyword: e.target.value, movies: filteredItems });
  };

  handleOverSevenChange = (e) => {
    this.setState({ overSeven: e.target.checked });
  };

  render() {
    const { keyword, overSeven, movies } = this.state;
    const arr = movies.map((item) => ({
      text: item.name,
      id: item.rate,
    }));

    return (
      <div>
        <div>
          <div>Keyword</div>
          <input
            type="text"
            value={keyword}
            onChange={this.handleKeywordChange}
          />
        </div>
        <div>
          Only over 7.0
          <input
            type="checkbox"
            checked={overSeven}
            onChange={this.handleOverSevenChange}
          />
        </div>
        <List items={arr} />
      </div>
    );
  }
}
