import "./App.css";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "Safa Mohamed",
      Profession: "Joined Go My Code as a Full-Stack JS student",
      Bio:
        "Safa is a 25 years old electrical and automation engineer who graduated from the National Engineering School Of Gabes ENIG, which is endowed with robotics and embedded systems, with a humbled knowledge in industrial diagnosis and maintenance.",
      imgsrc: <img src={"/IMG.jpg"} alt=""></img>,
      show: false,
      time: 0,
    };
    this.interval = 0;
    this.startTimer();
  }

  componentDidMount() {}

  componentWillUnmount() {
    this.clearTimer();
  }

  update() {
    this.setState({ time: (this.state.time += 1) });
  }

  startTimer() {
    this.setState({ show: true });
    this.interval = setInterval(() => {
      this.update();
    }, 1000);
  }

  clearTimer() {
    clearInterval(this.interval);
  }

  handleClick() {
    this.state.show ? this.startTimer() : this.clearTimer();
  }
  render() {
    return (
      <section>
        <div className="prof">
          {this.state.show && (
            <>
              {this.state.imgsrc}
              <h1>{this.state.FullName}</h1>
              <h4>Profession: {this.state.Profession}</h4>
              <p>Bio: {this.state.Bio}</p>
              <h6>{this.state.time} seconds</h6>
            </>
          )}

          <button
            onClick={() => this.setState({ show: !this.state.show, time: 0 })}
          >
            ClickMe
          </button>
        </div>
      </section>
    );
  }
}
export default App;
