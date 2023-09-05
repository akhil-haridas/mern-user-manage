import axios from "axios";
import Swal from "sweetalert2";

const API_BASE_URL = "http://localhost:4444/api/user";

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add headers or authentication tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Handle successful responses here
    return response.data;
  },
  (error) => {
    // Handle errors here
    return Promise.reject(error);
  }
);

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const getCountries = async () => {
  try {
    const response = await api.get("/countries");
    return response;
  } catch (error) {
    Toast.fire({
      icon: "error",
      text: "Error fetching image",
    });
    throw error;
  }
};

export const getLanguages = async () => {
  try {
    const response = await api.get("/languages");
    return response;
  } catch (error) {
    Toast.fire({
      icon: "error",
      text: "Error fetching image",
    });
    throw error;
  }
};

export const getStates = async (countryId) => {
  try {
    const response = await api.get(`/states/${countryId}`);
    return response;
  } catch (error) {
    Toast.fire({
      icon: "error",
      text: "Error fetching image",
    });
    throw error;
  }
};

export const getCities = async (stateId) => {
  try {
    const response = await api.get(`/cities/${stateId}`);
    return response;
  } catch (error) {
    Toast.fire({
      icon: "error",
      text: "Error fetching image",
    });
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post("/createuser", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    Toast.fire({
      icon: "success",
      title: "User created successfully",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userData) => {
  try {
    const response = await api.put("/updateuser", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    Toast.fire({
      icon: "success",
      title: "User updated successfully",
    });
    return response;
  } catch (error) {
    throw error;
  }
};


export const getAllusers = async (page = 1, limit = 10) => {
  try {
    const response = await api.get(`/allusers?page=${page}&limit=${limit}`);

    return response;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (userID) => {
  try {
    const response = await api.get(`/user/${userID}`);
    return response;
  } catch (error) {
    Toast.fire({
      icon: "error",
      text: "Error fetching image",
    });
    throw error;
  }
};


export const removeUser = async (userID) => {
      try {
        const response = await api.delete(`/removeuser/${userID}`);
        return response;
      } catch (error) {
        Toast.fire({
          icon: "error",
          text: "Error fetching image",
        });
        throw error;
      }
}