import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { books } from "./services/books";
import BookCard from "./Components/BookCard";

class App extends React.Component {

  state = { 
    authors: [String], 
    date: Number,
    title: String, 
    cover: String, 
    description: String 
  };

  componentDidMount() {
    this.setState({ 
      authors: books.authors, 
      date: books.date, 
      title: books.title, 
      cover: books.cover, 
      description: books.description 
    }); 
  }

  render() {
    console.log("STATE: ", this.state);

    return (
      <div className="App">
        <div className="App-header">
          <h1>
            <img src={logo} className="App-logo" alt="logo" />
            Hello from the Tragic Cavern!
            <img src={logo} className="App-logo" alt="logo" />
          </h1>
        </div>
        <div className="row">
          <p className="col-1"><BookCard/></p>
          <p className="col-2"><BookCard/></p>
          <p className="col-2"><BookCard/></p>
        </div>
      </div>
    );
  }
}

export default App;
