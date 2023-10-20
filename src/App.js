import Body from "./Components/Body";
import { Provider } from "react-redux";
import netflixStore from "./utills/appStore";
//import Header from "./Components/Header";
function App() {
  return (
    <div>
      <Provider store={netflixStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
