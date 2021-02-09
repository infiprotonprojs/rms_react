import axios from 'axios';

const property_base_url = "http://localhost:8080/api/v1/users/1/properties";

class ServiceProperty {

    createProperty(property){
        return axios.post(property_base_url, property);
    }

    getPropertyById(propertyId){
        return axios.get(property_base_url+'/'+propertyId);
    }

    updateProperty(property, propertyId){
        return axios.put(property_base_url+'/'+propertyId, property);
    }
}
export default new ServiceProperty()