//
import React, {Component} from 'react'

import { Col,Button,Grid } from 'react-bootstrap'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


function IndexComponent(props) {
	return(
		<Col xs={12} md={12}>
			<div>Index Component</div>

			<Grid>
				<Button bsSize="large"> 
					<Link to="/one"> One </Link> 
				</Button>
			</Grid>
			
			<Grid>
				<Button bsSize="large"> 
					<Link to="/two"> Two </Link> 
				</Button>
			</Grid>

		</Col>
	)
}





export default IndexComponent