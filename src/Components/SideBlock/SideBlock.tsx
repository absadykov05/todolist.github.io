import React, {useEffect, useState} from 'react';
import s from './SideBlock.module.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {Item, titleEdit} from "../../Redux/Slices/counterSlice";
import {DateNumber} from "../../Time";
import {hideBlock} from "../../Redux/Slices/sideBlockSlice";

const SideBlock = () => {
    const items = useSelector((state: RootState) => state.counter.items);
    const index = useSelector((state: RootState) => state.sideBlock.index);
    const isVisible = useSelector((state: RootState) => state.sideBlock.isVisible);
    const item: Item | undefined = items[index];
    const dispatch = useDispatch();
    const [editText, setEditText] = useState(item?.title);

    useEffect(() => {
        setEditText(item.title);
    }, [item])


    if (item && isVisible) {
        return (
            <div className={s.main}>
                <>
                    <input className={s.input} value={editText}
                           onChange={(event) => setEditText(event.target.value)}/>
                    <button className={s.button} onClick={() => dispatch(titleEdit({index: index, text: editText}))}>Edit</button>
                </>
                <span className={s.span}>
                    {(DateNumber[0] - item.date[0]) === 0 ? 'сегодня' : DateNumber[0] - item.date[0] + " дня назад"}
                </span>
                <button onClick={() => dispatch(hideBlock())}>Close</button>
            </div>
        );
    } else {
        return <div></div>
    }
};

export default SideBlock;
