import axios from 'axios';

const property_base_url = "http://localhost:8080/api/v1/users/1/properties";
const url = "http://localhost:8080/api/v1/properties";

class ServiceProperty {

    createProperty(property) {
        return axios.post(property_base_url, property);
    }

    getPropertyById(propertyId) {
        return axios.get(url + '/' + propertyId);
    }

    updateProperty(property, propertyId) {
        return axios.put(url + '/' + propertyId, property);
    }

    deleteProperty(propertyId) {
        return axios.delete(url + '/' + propertyId);
    }
}

export default new ServiceProperty()