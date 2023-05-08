import { Component } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import { Container } from "./App.styled";


class App extends Component {
  state = {
  
}
  render() {
    return (
      <Container><Searchbar /></Container> 
    );
  };
};

// https://pixabay.com/api/?q=cat&page=1&key=34365353-78897900aa8d53aff07d0a12e&image_type=photo&orientation=horizontal&per_page=12


export default App;