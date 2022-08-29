import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeUser, setOpenMenu} from "../../Redux/Slices/userSlice";
import {RootState} from "../../Redux/redux-store";

const AuthMenu = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => (state.user.isOpen));
    const onClick = () => {
        dispatch(removeUser());
        dispatch(setOpenMenu());
    }
    if (isOpen) {
        return (
            <div style={{
                width: 150,
                height: 70,
                border: 'indigo',
                borderColor: '#000',
                position: 'fixed',
                backgroundColor: '#8E8E93',
                display: "flex",
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: "flex-start",
                top: 30,
                right: 50
            }}>
                <Link onClick={() => dispatch(setOpenMenu())} to='/login'
                      style={{color: '#000', fontSize: 'small', paddingTop: 10, textDecoration: 'none'}}>Изменить
                    аккаунт</Link>
                <text onClick={onClick} style={{
                    color: '#000',
                    fontSize: 'small',
                    paddingTop: 10,
                    textDecoration: 'none',
                    cursor: "pointer"
                }}>Выйти
                </text>
            </div>
        );
    } else {
        return <></>
    }
};

export default AuthMenu;
