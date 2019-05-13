import React from "react";
import "../App.css";

class BookCard extends React.Component {

  state = { 
    authors: [String], 
    date: Number,
    title: String, 
    cover: String, 
    description: String 
  };

  componentDidMount() {
    this.setState({ 
      authors: ["Dan Simmons", "Julie Newmar"], 
      date: 1986, 
      title: "Song of Kali", 
      cover: "http://books.google.com/books/content?id=yvAqAwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api", 
      description: "Song of Kali follows an American magazine editor who journeys to the brutally bleak, poverty-stricken Indian city of Calcutta in search of a manuscript by a mysterious poet—but instead is drawn into an encounter with the cult of Kali, goddess of death. A chilling voyage into the squalor and violence of the human condition."
    }); 
  }

  render() {

    return (
      <div className="w3-card">
        <h2>{this.state.title}</h2>
        <p><img alt={this.state.title} className="img-fluid" src={this.state.cover} style={{ margin: "0 auto" }} /></p> 
        <h3>{this.state.authors[0]} ({this.state.date})</h3> 
        <p>{this.state.description}</p>
      </div>
    )
  }

}

export default BookCard;
