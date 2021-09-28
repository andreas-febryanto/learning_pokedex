import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
function App() {
  return (
    <div className="h-screen bg-gray-700">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
