import axios from "axios";

// const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const rapidAPIKey = import.meta.env.VITE_RAPID_API_KEY

const options = {
  params: {
    maxResults: "30",
  },
  headers: {
    "X-RapidAPI-Key": rapidAPIKey,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchAPI = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
