import axios from 'axios';

const property_base_url = "http://localhost:8080/api/v1/users/1/properties";

class ServiceProperty {

    createProperty(property){
        return axios.post(property_base_url, property);
    }

    getPropertyById(propertyId){
        return axios.get("http://localhost:8080/api/v1/properties"+'/'+propertyId);
    }

    updateProperty(property, propertyId){
        return axios.put("http://localhost:8080/api/v1/properties"+'/'+propertyId, property);
    }

    deleteProperty(propertyId){
        return axios.delete("http://localhost:8080/api/v1/properties"+'/'+propertyId);
    }
}
export default new ServiceProperty()