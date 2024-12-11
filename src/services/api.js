// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change this to your backend API

export const fetchAchievements = () => {
  return axios.get(`${API_URL}/achievements`);
};

export const createAchievement = (achievement) => {
  return axios.post(`${API_URL}/achievements`, achievement);
};

export const fetchStudentAchievements = (studentId) => {
  return axios.get(`${API_URL}/students/${studentId}/achievements`);
};
