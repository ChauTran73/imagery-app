import config from '../config'

const TokenService = {
    
    //save token to localstorage
    //remove token
    //create token
    makeAuthToken(userName, password){
        return window.btoa(`${userName}:${password}`)
    },
    saveAuthToken(token){
        window.localStorage.setItem(config.TOKEN_KEY,token)
    }
}

export default TokenService;