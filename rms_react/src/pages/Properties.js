import React, { Component } from 'react'
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

class Properties extends Component {
    constructor(props) {
        super(props)
        this.state={
            properties: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/api/v1/users/1/properties")
        .then(response => {
            console.log(response.data)
            this.setState({properties:response.data})
        })
        .catch()
    }
    render() {
        const propsList = [this.state];
        const propertyList = propsList.map(property => {
            return <tr key={property.id}>
                <td>{property.propertyName}</td>
                <td>{property.type}</td>
                <td>{property.address}</td>
                <td>{property.unitsCount}</td>
                <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/" + property.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => this.remove(property.id)}>Delete</Button>
                </ButtonGroup>
                </td>
            </tr>
        });
        return (
            <div>
                <Container fluid>
                <div className="float-right">
                    <Button size="sm" color="success" tag={Link} to="/">Add Property</Button>
                </div>
                <h2 className="text-center">Properties List</h2>
                <div className="row">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Units count</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {propertyList}

                        </tbody>

                    </table>
                </div>
                </Container>
                
            </div>
        )
    }
}
export default Properties