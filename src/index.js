import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
// import "bootstrap/dist/css/bootstrap.min.css";

// Вся борода связанная с redux, в этой архитектуре хранилище покладено в index.js
// редьюсеры покладаются в отдельные файлы в каталоге redux
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// Максимально хитросделанный способ получить данные из хранилица
// в ответ на любое его изменение
const loggerMiddleware = store => next => action => {
  const result = next(action);
  console.log("Middleware Logger: ", store.getState());
  return result;
};

// для этого в store надо дополнительно передать специальную функцию
// которой в качестве параметра надо передать собственную функцию, это мегапипец...
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk))
);

const data = {
  company: "Vebkomas",
  created: new Date(),
  motto:
    "It ain't what you don't know that gets you into trouble, it's what you know for sure that just ain't so..."
};

const app = (
  <Provider store={store}>
    <App data={data} />
  </Provider>
);

ReactDOM.render(app, document.getElementById("app"));
