import { Component } from "react";
import SearchPannel from "./SearchPannel";

export default class ManageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    fetch("https://mocki.io/v1/2aae02bf-cc33-455e-889c-9a8dd8820b72")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          loading: false,
          movies: response, 
        });
      });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return "Please wait ...";
    }
    return <SearchPannel movies={movies} />;
  }
}
