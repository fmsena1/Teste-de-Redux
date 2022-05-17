// Action e Actions Types

    const CHANGE_USER = "CHANGE_USER";
    const LOGOUT = "LOGOUT";


//Actions

    function changeUser(user){
        return{
            type: CHANGE_USER,
            info: "Change the current user",
            payload: user
        };
    }

    function logout(){
        return{
            type:LOGOUT,
            info: "Logout the current user",

        }
    }


    const initialState = {
        user:'',
        isLogged:false
    }

    //Reducers
    function userReducer(prevState, action){
        switch(action.type){
            case CHANGE_USER:
                return{
                    ...prevState,
                    user:action.payload,
                    isLogged:true
                }
            case LOGOUT: 
                return {
                    ...prevState,
                    user:'',
                    isLogged:false
                }
            default;
            return prevState;
        }

    }