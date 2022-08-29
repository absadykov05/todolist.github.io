import React, {MouseEvent} from 'react';
import s from './Home.module.css';
import deleteIcon from '../../Assets/delete.png';
import fav from '../../Assets/starL.png'
import favR from '../../Assets/starY.png'
import {useSelector, useDispatch} from 'react-redux'
import {Item, finishTask, deleteTask, starTask, onArchiveChange, addArchiveTask} from "../../Redux/Slices/counterSlice";
import {RootState} from "../../Redux/redux-store";
import {hideMenu, showNewMenu} from "../../Redux/Slices/contextMenuSlice";
import Menu from "../ContextMenu/Menu";
import {DateNumber} from "../../Time";

const Archive = () => {
    const items = useSelector((state: RootState) => state.counter.items);
    const textA = useSelector((state: RootState) => state.counter.textA);
    const dispatch = useDispatch();

    // @ts-ignore
    const onArchiveTextChange = (event) => {
        dispatch(onArchiveChange(event.target.value));
    }
    const addArchiveTask1 = () => {
        dispatch(addArchiveTask());
    }
    const finish_Task = (id: number) => {
        dispatch(finishTask(id));
    }
    const delete_Task = (id: number) => {
        dispatch(deleteTask(id))
    }

    const RightClick = (event: MouseEvent, index: number, id: number) => {
        event.preventDefault();
        dispatch(showNewMenu({position: [event.pageX, event.pageY], index: index, id: id}));
    }

    const currentTime = (date: number[]) => {
        if ((DateNumber[0] - date[0]) === 0) {
            return 'сегодня';
        } else if ((DateNumber[0] - date[0]) === 1) {
            return 'вчера';
        } else {
            return `${(DateNumber[0] - date[0])} дня назад`;
        }
    }

    return (
        <div style={{height: '100%'}}>
            <Menu/>
            <div className={s.main} onClick={() => dispatch(hideMenu())}>
                <div className={s.Tasks}>
                    <div className={s.Tasks}>
                        {items.map((task: Item, index) => {
                            if (task.status === 'archive') {
                                return <div onContextMenu={(event) => RightClick(event, index, task.id)}
                                            className={s.task}
                                            key={task.id}>
                                    <img onClick={() => finish_Task(index)} className={s.imgDone} alt=''
                                         src={task.status === 'archive' ? 'https://cdn-icons-png.flaticon.com/512/3515/3515278.png'
                                             : 'https://cdn-icons-png.flaticon.com/512/149/149148.png'}/>
                                    <div className={s.title_block}>
                                        <div>{task.title}</div>
                                        <span  className={s.span}>{currentTime(task.date)}</span>
                                    </div>
                                    <img onClick={() => dispatch(starTask(index))} src={task.stared ? favR : fav}
                                         style={{width: 25, height: 25}} alt=''/>
                                    <img onClick={() => delete_Task(task.id)} className={s.imgDelete} src={deleteIcon}
                                         alt=''/>
                                </div>
                            }
                        })}
                    </div>
                </div>
                <div className={s.input_and_button}>
                    <input className={s.input} value={textA} onChange={onArchiveTextChange}/>
                    <button className={s.button} onClick={addArchiveTask1}>Add Task</button>
                </div>
            </div>
        </div>
    );
};


export default Archive;
