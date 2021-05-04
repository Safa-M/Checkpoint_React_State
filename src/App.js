import "./App.css";
import React from "react";
class App extends React.Component {
  intervalID = 0;
  state = {
    FullName: "Safa Mohamed",
    Profession: "Joined Go My Code as a Full-Stack JS student",
    Bio:
      "Safa is a 25 years old electrical and automation engineer who graduated from the National Engineering School Of Gabes ENIG, which is endowed with robotics and embedded systems, with a humbled knowledge in industrial diagnosis and maintenance.",
    imgsrc: <img src={"/IMG.jpg"} alt=""></img>,
    show: true,
  };

  // componentDidMount() {
  //   this.interval = setInterval(
  //     () =>
  //       this.setState({
  //         handleClick: this.state.handleClick + 1,
  //       }),
  //     1000
  //   );
  // }

  handleClick = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <section>
        <div className="prof">
          {this.state.show && (
            <>
              {this.state.imgsrc}
              <h1>{this.state.FullName}</h1>
              <h3>Profession: {this.state.Profession}</h3>
              <p>Bio: {this.state.Bio}</p>
            </>
          )}

          <button onClick={this.handleClick}>ClickMe</button>
        </div>
      </section>
    );
  }
  // componentDidMount() {
  //   this.interval = setInterval(() => this.setState(), 1000);
  // }
}
export default App;
