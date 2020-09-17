import axios from 'axios';

const getPosts = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/posts');
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createComment = async (postID, comment) => {
  try {
    const response = await axios.post(
      `http://localhost:3001/api/posts/${postID}/comments`,
      comment
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default {
  getPosts,
  createComment,
};
