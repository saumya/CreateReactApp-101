//
import React, {Component} from "react"
//import LoginContainer from "../containers/LoginContainer"
//import SearchContainer from "../containers/SearchContainer"
//import LoginView from "./LoginView.react"

//import '../App.css';
//
import { Navbar,Jumbotron, Button,Grid } from 'react-bootstrap';

//
class CompTwo extends Component {
  render(){
    return (
      <div className="HomeScreen">
        
        <Jumbotron>
          <Grid>
            <h1>Component Two</h1>
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
export default CompTwo
