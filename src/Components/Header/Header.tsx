import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import s from './Header.module.css';
import AuthMenu from "../Firebase/AuthMenu";
import {setOpenMenu} from "../../Redux/Slices/userSlice";

const Header = () => {
    const email = useSelector((state: RootState) => state.user.email);
    const dispatch = useDispatch();
    return (
        <>
        <div className ={s.header} >
            <div>TO-DO</div>
            <span onClick = {() => dispatch(setOpenMenu())} className={s.account} >{email? email : 'Войти'} </span>
            <AuthMenu/>
        </div>
            </>
    );
};

export default Header;
