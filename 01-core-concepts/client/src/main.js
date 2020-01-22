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

const domContainer = document.querySelector("#content");
ReactDOM.render(e(LikeButton), domContainer);
