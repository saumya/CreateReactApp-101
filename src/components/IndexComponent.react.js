//
import React from 'react'

import { Col,Button } from 'react-bootstrap'
import { Link, } from 'react-router'


function IndexComponent(props) {
	return(
		<Col xs={12} md={12}>
			<div>Index Component</div>
				<div>
					<div style={{ marginBottom:10, }}>
						<Button bsSize="large"> <Link to="/one"> One </Link> </Button>
					</div>
					<div style={{ marginBottom:10, }}>
						<Button bsSize="large"> <Link to="/two"> Two </Link> </Button>
					</div>
					<div>
						<Button bsSize="large"> <Link to="/three"> Three </Link> </Button>
					</div>
				</div>
		</Col>
	)
}





export default IndexComponent