import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import CreateAccount from "./components/LoginPage/Modal/CreateAccount";
import TableAccount from "./components/LoginPage/TableAccount";
function App() {
    return (
        <Router>
            <Route path="/" exact>
                <Login />
            </Route>
            <Route path="/create" exact>
                <CreateAccount />
            </Route>
            <Route path="/table" exact>
                <TableAccount />
            </Route>
        </Router>
    );
}

export default App;
