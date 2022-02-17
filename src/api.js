import axios from "axios";

export const getEvents = async () => {
  console.log("GETTING EVENTS!");
  return await axios.get("http://localhost:8080/api/events");
};
