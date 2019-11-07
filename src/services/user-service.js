const UserService = {
    saveUser(user) {
        window.localStorage.setItem('User Name', user)
    },
    getUser(user){
        return window.localStorage.getItem('User Name')
    }
}
export default UserService;