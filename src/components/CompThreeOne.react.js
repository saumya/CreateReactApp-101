//
import React, {Component} from "react"
//import LoginContainer from "../containers/LoginContainer"
//import SearchContainer from "../containers/SearchContainer"
//import LoginView from "./LoginView.react"

//import '../App.css';
//
import { Navbar,Jumbotron, Button,Grid,Col } from 'react-bootstrap';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

//
class CompThreeOne extends Component {
  render(){
    return (
      <div className="HomeScreen">
        
        <Jumbotron>
          <Grid>
            <h1>CompThreeOne</h1>
          </Grid>
        </Jumbotron>

      </div>
    );
  }
}
export default CompThreeOne
