import React from 'react';
import Form from "./Form";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {removeUser, setUser, userSliceType} from "../../Redux/Slices/userSlice";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import s from "./Firebase.module.css";
import {Link} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const setUser1 = (email: string, pass: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
            .then(({user}) => {
                if(user.email) {
                    let userData = {
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                    };
                    dispatch(setUser(userData));
                }
            })
            .catch(() => alert('Неверный логин или пароль'));
    }
    return (
        <div>
            <div className={s.label}>Log in</div>
            <Form title={'Login'} handleClick={setUser1}/>
            <Link className = {s.link} to = '/sign_in'>Еще нету аккаунта?</Link>
        </div>
    );
};

export default Login;
