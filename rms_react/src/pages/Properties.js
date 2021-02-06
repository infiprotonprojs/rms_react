import React, {Component} from 'react'
import PropertyList from "./PropertyList";
import axios from 'axios';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import {Link} from 'react-router-dom';


class PropertiesToRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyList: []
        }
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
        const propertyInfoList = this.state.propertyList.map((propertyInfo) => (
            <PropertyList key={propertyInfo.id} property={propertyInfo}/>));
        return (
            <>
                <div className="float-right">
                    <Button color="success" tag={Link} to="/">Add Property</Button>
                </div>
                <h2 className="text-center">Properties List</h2>

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
