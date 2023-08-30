import axios from "axios";
export async function fetchCars(obj){
    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: {make: obj.make, model: obj.model},
        headers: {
            'X-RapidAPI-Key':import.meta.env.VITE_RapidAPIKey,
            'X-RapidAPI-Host': import.meta.env.VITE_RapidAPIHost
          }
      };
try {
    const response = await axios.request(options)
    return response.data
} catch (error) {
    console.error(error)
}
}