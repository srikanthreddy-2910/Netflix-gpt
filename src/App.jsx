import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/appStore";


const App = () => { 
  return (
    <Provider store={store}>
      <Body /> 
    </Provider>
  );
};

export default App;