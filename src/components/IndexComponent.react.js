//
import React, {Component} from 'react'

import { Col,Button,Grid } from 'react-bootstrap'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


function IndexComponent(props) {
	return(
		<Col xs={12} md={12}>
			<div>Index Component</div>
				<div>
					<div style={{ marginBottom:10, }}>
						<Button bsSize="large"> <Link to="/one"> One </Link> </Button>
					</div>
					<div>
						<Button bsSize="large"> <Link to="/two"> Two </Link> </Button>
					</div>
				</div>
		</Col>
	)
}





export default IndexComponent