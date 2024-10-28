import axios from "axios";

// const backendUrl = "http://localhost:5000"
// const backendUrl = "https://qr-server-five.vercel.app";
const backendUrl = "https://server.amiprobashi.me";

const axiosPublic = axios.create({
  baseURL : backendUrl
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic;