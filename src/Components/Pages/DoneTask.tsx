import React, {MouseEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import done from "../../Assets/done.png";
import deleteIcon from "../../Assets/delete.png";
import s from './Home.module.css';
import {activateTask, deleteTask, starTask} from "../../Redux/Slices/counterSlice";
import {showNewMenu} from "../../Redux/Slices/contextMenuSlice";
import Menu from "../ContextMenu/Menu";
import favR from "../../Assets/starY.png";
import fav from "../../Assets/starL.png";
import {DateNumber} from "../../Time";

const DoneTask = () => {
    const items = useSelector((state: RootState) => state.counter.items);
    const dispatch = useDispatch();

    const delete_Task = (idx: number) => {
        dispatch(deleteTask(idx));
    }
    const return_Task = (id: number) => {
        dispatch(activateTask(id));
    }

    const RightClick = (event: MouseEvent, index: number, id: number) => {
        event.preventDefault();
        dispatch(showNewMenu({position: [event.pageX, event.pageY], index: index, id: id}));
    }
    return (
        <div style={{height: '100%'}}>
            <Menu/>
        <div className={s.main}>
            <div className={s.Tasks}>
            {items.map((obj, index) => {
                if (obj.status == 'done') {
                    return <div className={s.task} key={obj.id}
                                onContextMenu={(event) => RightClick(event, index, obj.id)}>
                        <img onClick={() => return_Task(index)} className={s.imgDone}
                             src='https://cdn-icons-png.flaticon.com/512/149/149148.png'/>
                        <div className={s.title_block}>
                            <div>{obj.title}</div>
                            <span className={s.span}>{(DateNumber[0] - obj.date[0]) == 0 ? 'сегодня': DateNumber[0] - obj.date[0] + " дня назад" }</span>
                        </div>
                        <img onClick={() => dispatch(starTask(index))} src={obj.stared ? favR : fav}
                             style={{width: 25, height: 25}}/>
                        <img onClick={() => delete_Task(obj.id)} className={s.imgDelete} src={deleteIcon}/>
                    </div>
                }
            })}

            </div>
        </div>
        </div>
    );
};

export default DoneTask;
