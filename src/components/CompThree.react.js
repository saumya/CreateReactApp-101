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
import CompFour from './CompFour.react';
//import CompThreeOne from './CompThreeOne.react';
//import CompThreeTwo from './CompThreeTwo.react';

//
class CompThree extends Component {
  render(){
    return (
      <div className="HomeScreen">
        
        <Jumbotron>
          <Grid>
            <h1>Three</h1>
          </Grid>
          <Grid>
            <Button bsSize="large"> 
              <Link to="/">Home</Link> 
            </Button>
            <Button bsSize="large"> 
              <Link to="/three">Three : Home</Link> 
            </Button>
            <Button bsSize="large"> 
              <Link to="/three/1">Three : One</Link> 
            </Button>
            <Button bsSize="large"> 
              <Link to="/three/2">Three : Two</Link> 
            </Button>
          </Grid>
        </Jumbotron>


        {
          //renders the children
          this.props.children
        }

        <CompFour />

      </div>
    );
  }
}
export default CompThree
