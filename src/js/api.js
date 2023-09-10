// import axios from 'axios';
// const API_KEY = '39350570-0225d4429ca2bb8d9989d6d5b';
// const PIXABAY_API_URL = `https://pixabay.com/api/?key=${API_KEY}`;

// export async function searchImages(userInput) {
//   const urlEncodedUserInput = userInput.split(' ').join('+');
//   try {
//     const response = await axios.get(
//       `${PIXABAY_API_URL}&q=${urlEncodedUserInput}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
//     );
//     console.log('search result from API:', response.data);
//     return response.data;
//   } catch (error) {
//     errorInAxios(error);
//   }
// }

// function errorInAxios(error) {
//   if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//     console.log(error.response.data);
//     console.log(error.response.status);
//     console.log(error.response.headers);
//   } else if (error.request) {
//     // The request was made but no response was received
//     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//     // http.ClientRequest in node.js
//     console.log(error.request);
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     console.log('Error', error.message);
//   }
//   //   console.log(error.config);
// }
