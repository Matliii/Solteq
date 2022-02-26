import axios from 'axios';
const baseUrl = '/api/getdata';

const getData = async () => {
    const response = await axios.get(baseUrl)
    return response.data
};

const dataServices = { getData };

export default dataServices;