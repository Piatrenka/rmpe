"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e(
        "p",
        // btn btn-outline-white
        {
          className:
            "border rounded p-2 px-3 mr-4 d-none d-md-inline-block text-white"
        },
        "Спасибо за лайк!!!"
      );
    }

    return e(
      "button",
      {
        className: "btn btn-outline-white",
        onClick: () => this.setState({ liked: true })
      },
      "Лайкнуть, что есть силы..."
    );
  }
}

class Perc extends React.PureComponent {
  render() {
    const { label, score = 0, total = Math.max(1, score) } = this.props;
    return (
      <div className="white-text">
        <h6>{label}</h6>
        <span>{Math.round((score / total) * 100)} %</span>
      </div>
    );
  }
}

function Copyright(props) {
  return <p className="white-text">Copyright {props.company}, 2020</p>;
}

// Изготовление компоненты с использованием React.CreateElement
ReactDOM.render(
  e("div", null, "This text is rendered by using React.createElement"),
  document.getElementById("content1")
);

// Изготовление компоненты с использованием React.Component
const domContainer = document.querySelector("#content2");
ReactDOM.render(e(LikeButton), domContainer);

// Отрендить компоненту  на основе React.PureComponent
ReactDOM.render(
  <Perc label="Home Task is completed on " score="0.9999" />,
  document.getElementById("content3")
);

// Отрендить функциональную компоненту
ReactDOM.render(
  <Copyright company="Vebkomas" />,
  document.getElementById("content4")
);
