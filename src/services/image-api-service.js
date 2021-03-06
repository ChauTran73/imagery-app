import config from '../config'
import TokenService from './token-service';

//this service file contains functions for client to interact with API endpoints

const ImageApiService = {
  getImages() { 
    console.log(config.API_ENDPOINT)
    return fetch(`${config.API_ENDPOINT}/images`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getImage(imageId) {
    return fetch(`${config.API_ENDPOINT}/images/${imageId}`, {
      headers: {
        // 'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postImage(title, description, image_url){
    return fetch(`${config.API_ENDPOINT}/images`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body : JSON.stringify({
         title,
         description,
         image_url,
        }),
    })
    .then(res => 
      (!res.ok)
           ? res.json().then(e => Promise.reject(e))
            : res.json()
          )
  },
  deleteImage(image_id){
    return fetch(`${config.API_ENDPOINT}/images/${image_id}`,{
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => res)
    .catch(err => {
      console.log(err);
    });
  },
  getImagesByUser(userId){ //get images created by the user
    return fetch(`${config.API_ENDPOINT}/users/images`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getImageComments(imageId) {
    return fetch(`${config.API_ENDPOINT}/images/${imageId}/comments`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteComment(id){
    return fetch(`${config.API_ENDPOINT}/comments/${id}`,{
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => res)
    .catch(err => {
      console.log(err);
    });
  },
  postComment(imageId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
         'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        image_id: imageId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default ImageApiService;
