import "./App.css";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export class App extends Component {
  state = {
    person: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YxIxBhIHHcCHEAzduWGxuLv78mrQLgJgVg&usqp=CAU",
      fullName: "Gabriel morino",
      bio: "The charge:  Organtrade",
      profession: "The Profession: Doctor",
    },
    shows: false,
    timer: 0,
  };
  toggleVisibility = () => {
    this.setState({
      shows: !this.state.shows,
    });
  };
  componentDidMount = () => {
    console.log("run componentDidMount");
    this.myInterval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  render() {
    return (
      <div className="App">
        <h1>wanted criminals</h1>
        <button className="visibility-btn" onClick={this.toggleVisibility}>
          {this.state.shows === true ? "Hide" : "Show"} list
        </button>

        {this.state.shows && (
          <Card style={{ width: "18rem" }} className="mx-auto">
            <Card.Img variant="top" src={this.state.person.img} height={250} />
            <Card.Body>
              <Card.Title>{this.state.person.fullName}</Card.Title>
              <Card.Text>
                <p>{this.state.person.profession}</p>
                <p> {this.state.person.bio}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
        <h2>Timer: {this.state.timer}</h2>
      </div>
    );
  }
}

export default App;
