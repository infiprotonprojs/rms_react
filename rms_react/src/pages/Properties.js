import React, { Component } from 'react'
import PropertyService from '../services/PropertyService';

class Properties extends Component {
    constructor(props) {
        super(props)
        this.state={
            properties: []
        }
    }

    componentDidMount(){
        PropertyService.getProperties().then((res) =>{
            this.setState({properties: res.data})
        });
    }
    render() {
        const {propsList} = this.state;
        const propertyList = propsList.map(property => {
            return <tr key={property.id}>
                <td>{property.propertyName}</td>
                <td>{property.type}</td>
                <td>{property.address}</td>
                <td>{property.unitsCount}</td>
            </tr>
        });
        return (
            <div>
                <h2 className="text-center">Properties List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Address</th>
                                <th>Units count</th>
                            </tr>
                        </thead>

                        <tbody>
                            {propertyList}

                        </tbody>

                    </table>
                </div>
                
            </div>
        )
    }
}
export default Properties