import config from '../config'
// import TokenService from './token-service';

//this service file contains functions for client to interact with API endpoints

const ImageApiService = {
  getImages() { 
    return fetch(`${config.API_ENDPOINT}/images`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getImage(imageId) {
    return fetch(`${config.API_ENDPOINT}/images/${imageId}`, {
    //   headers: {
    //     'authorization': `basic ${TokenService.getAuthToken()}`
    //   },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getImageComments(imageId) {
    return fetch(`${config.API_ENDPOINT}/images/${imageId}/comments`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // postComment(imageId, text, rating) {
  //   return fetch(`${config.API_ENDPOINT}/comments`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       'authorization': `basic ${TokenService.getAuthToken()}`
  //     },
  //     body: JSON.stringify({
  //       thing_id: thingId,
  //       rating,
  //       text,
  //     }),
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // }
}

export default ImageApiService;
