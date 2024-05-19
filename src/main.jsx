import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";
import PopupProvider from "./context/PopupContext.jsx";
import { persistor } from "./redux/store.jsx";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PopupProvider>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </PopupProvider>
    </Provider>
  </React.StrictMode>
);
