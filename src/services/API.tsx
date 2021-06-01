import axios from 'axios';

const BASE_API = axios.create({
	baseURL: process.env.BASE_API
});

export { BASE_API };
