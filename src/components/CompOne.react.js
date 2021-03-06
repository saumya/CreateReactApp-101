//
import React, {Component} from "react"
//import LoginContainer from "../containers/LoginContainer"
//import SearchContainer from "../containers/SearchContainer"
//import LoginView from "./LoginView.react"

//import '../App.css';
//
import { Navbar,Jumbotron, Button,Grid } from 'react-bootstrap';

//
class CompOne extends Component {
  render(){
    return (
      <div className="HomeScreen">
        <div>Home</div>
        <p>Welcome screen. This component is just a test.</p>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>React Bootstrap with Create-React-App</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>

      </div>
    );
  }
}
export default CompOne
