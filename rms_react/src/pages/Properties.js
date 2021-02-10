import React, {Component} from 'react'
import axios from 'axios';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import {Link} from 'react-router-dom';
import ServiceProperty from '../services/ServiceProperty';


class PropertiesToRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyList: []
        }
        this.deleteProperty = this.deleteProperty.bind(this);
    }

    deleteProperty(id) {
        ServiceProperty.deleteProperty(id).then((res) => {
            let property = [...this.state.propertyList].filter(i => i.id !== id);
            this.setState({propertyList: property});
        });
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/v1/users/1/properties')
            .then(response => {
                this.setState({propertyList: response.data.properties});
            })
            .catch(err => {
                console.log('Error while fetching properties API', err)
            });
    }

    render() {
        const propertyInfoList = this.state.propertyList.map((property) => {
            return (
                <>
                    <tr key={property.id}>
                        <td>{property.propertyName}</td>
                        <td>{property.type}</td>
                        <td>{property.address}</td>
                        <td>{property.unitsCount}</td>
                        <td>
                            <ButtonGroup>
                                <Button size="sm" color="primary" tag={Link}
                                        to={"/edit-property/" + property.id}>Edit</Button>
                                <Button size="sm" color="danger" style={{marginLeft: "10px"}}
                                        onClick={() => this.deleteProperty(property.id)}>Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                </>
            )
        });
        return (
            <>

                <h2 className="text-center">Properties List</h2>
                <div className="row">
                    <Button color="success" tag={Link} to="/add-property">Add Property</Button>
                </div>
                <div className="container-fluid m-2">
                    <div className="row border">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Address</th>
                                <th>Units count</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {propertyInfoList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default PropertiesToRender;
