import axios from 'axios';

const baseUrl = `http://localhost:4000`;

export const uploadImage = async (formData: any) => {
  const result = await axios
    .post(`${baseUrl}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      return response;
    });
  return result;
};

export const createNewPost = async (postDetails: any) => {
  const result = await axios.post(`${baseUrl}/post`, postDetails).then((response) => {
    return response;
  });
  return result;
};

export const getPosts = async (userId: string) => {
  const result = await axios.get(`${baseUrl}/post/list?userId=${userId}`).then((response) => {
    return response;
  });
  return result;
};
