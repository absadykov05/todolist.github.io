import React from 'react';
import {useDispatch} from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import {setUser} from "../../Redux/Slices/userSlice";
import s from "./Firebase.module.css";
import {Link} from "react-router-dom";

const SignIn = () => {
    const dispatch = useDispatch();
    const handleRegister = (email: string, pass: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
            .then(({user}) => {
                if(user.email) {
                    // @ts-ignore
                    let userData = {
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                    };
                    dispatch(setUser(userData));
                }
            })
            .catch(() => alert('Этот аккаунт уже существует'));
    }
    return <div>
        <div className={s.label}>Register</div>
        <Form title={'Sign in'} handleClick={handleRegister}/>
        <Link className = {s.link} to = '/login'>Уже есть аккаунт?</Link>
    </div>
};

export default SignIn;
