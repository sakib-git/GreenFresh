import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
});

const useAxiossecure = () => {
  return axiosSecure;
};

export default useAxiossecure;
