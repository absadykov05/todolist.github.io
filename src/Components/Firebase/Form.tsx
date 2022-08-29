import React from 'react';
import s from './Firebase.module.css';
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../../Redux/Slices/userSlice";
interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
}

const Form: React.FC<FormProps> = ({title, handleClick}) => {
    const [email, setEmail] = React.useState<string>('');
    const [pass, setPass] = React.useState<string>('');
    const dispatch = useDispatch();
    const onClick = (email: string, pass: string) => {
        handleClick(email, pass);
        setEmail('');
        setPass('');
    }
    return (
        <div className={s.main}>
            <input className={s.f_input} value={email} onChange={(e) => setEmail(e.target.value)}
                   placeholder={'  email'}></input>
            <input className={s.f_input} type={"password"} value={pass} onChange={(e) => setPass(e.target.value)}
                   placeholder={'  password'}></input>
            <div className = {s.buttons}>
                <button className={s.f_button} onClick={() => onClick(email, pass)}>{title}</button>
                <button className={s.f_button} onClick={() => dispatch(removeUser())}>Remove account</button>
            </div>
        </div>
    );
};

export default Form;
