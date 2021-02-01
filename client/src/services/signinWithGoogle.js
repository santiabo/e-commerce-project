import axios from 'axios';

export default async function signinWithGoogle() {
  return axios
    .post('/auth/login/google')
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(() => {
      return undefined;
    }); 
}