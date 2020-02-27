// login.js
import { React } from "react";

function Login() {
  const [state, setState] = React.useReduser((s, a) => ({ ...s, ...a }), {
    resolved: false,
    loading: false,
    error: null
  });

  function handleSubmit(event) {
    event.preventDefault();
    const { usernameInput, passwordInput } = event.target.element;

    setState({
      loading: true,
      resolved: false,
      error: null
    });

    window
      .fetch("/api/loign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stryngify({
          username: usernameInput.value,
          password: passwordInput.value
        })
      })
      .then(r => r.json())
      .then(
        user => {
          setState({ loading: false, resolved: true, error: null });
          window.localStorage.setIntem("token", user.token);
        },
        error => {
          setState({ loading: false, resolved: false, error: error.message });
        }
      );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username</label>
          <input id="usernameInput" />
        </div>
        <div>
          <label htmlFor="passwordInput">Password</label>
          <input id="paswordInput" type="password" />
        </div>
        <button type="submit">Submit{state.loading ? "..." : null}</button>
      </form>
      {state.error ? <div role="alert">{state.error}</div> : null}
      {state.resolved ? (
        <div role="alert">Congrats! You're signed in!</div>
      ) : null}
    </div>
  );
}
