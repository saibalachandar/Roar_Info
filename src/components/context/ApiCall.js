import axios from "axios";
import { LoginFailure, LoginStart, LoginSuccess } from "./AuthActions";



export const login = async (user, dispatch) => {
    dispatch(LoginStart);
    try {
        const res = await axios.post('auth/login', user);
        //    after admin dashboard ku use akum
        dispatch(LoginSuccess(res.data))
    } catch (error) {
        dispatch(LoginFailure)
    }
}