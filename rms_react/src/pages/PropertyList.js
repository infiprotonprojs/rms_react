import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup} from 'reactstrap';

const PropertyList = ({property}) => {
        return (
            <>
                <tr key={property.id}>
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
            </>
        )
    };
    export default PropertyList;