import React, {Component} from 'react'
import ServiceProperty from '../services/ServiceProperty';

class AddProperty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyName: '',
            type: '',
            address: '',
            unitsCount: ''
        }
        this.changePropertyNameHandler = this.changePropertyNameHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeUnitsCountHandler = this.changeUnitsCountHandler.bind(this);
        this.saveProperty = this.saveProperty.bind(this);
    }

    saveProperty(e) {
        e.preventDefault();
        let property = {
            propertyName: this.state.propertyName, type: this.state.type, address: this.state.address,
            unitsCount: this.state.unitsCount
        };
        console.log('property => ' + JSON.stringify(property));

        ServiceProperty.createProperty(property).then(res => {
            this.props.history.push('/properties');
        });

    }

    changePropertyNameHandler(event) {
        this.setState({propertyName: event.target.value});
    }

    changeTypeHandler(event) {
        this.setState({type: event.target.value});
    }

    changeAddressHandler(event) {
        this.setState({address: event.target.value});
    }

    changeUnitsCountHandler(event) {
        this.setState({unitsCount: event.target.value});
    }

    cancel() {
        this.props.history.push('/properties');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Property</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Property Name:</label>
                                        <input placeholder="Property Name" name="propertyName" className="form-control"
                                               value={this.state.propertyName}
                                               onChange={this.changePropertyNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Type:</label>
                                        <input placeholder="Type" name="type" className="form-control"
                                               value={this.state.type} onChange={this.changeTypeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Address:</label>
                                        <input placeholder="Address" name="address" className="form-control"
                                               value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Units Count:</label>
                                        <input placeholder="Units Count" name="unitsCount" className="form-control"
                                               value={this.state.unitsCount} onChange={this.changeUnitsCountHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveProperty}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                            style={{marginLeft: "10px"}}>Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddProperty