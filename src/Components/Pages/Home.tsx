import React, {MouseEvent} from 'react';
import s from './Home.module.css';
import deleteIcon from '../../Assets/delete.png';
import fav from '../../Assets/starL.png'
import favR from '../../Assets/starY.png'
import {useSelector, useDispatch} from 'react-redux'
import {Item, onChange, addTask, finishTask, deleteTask, starTask} from "../../Redux/Slices/counterSlice";
import {RootState} from "../../Redux/redux-store";
import {hideMenu, showNewMenu} from "../../Redux/Slices/contextMenuSlice";
import Menu from "../ContextMenu/Menu";
import {DateNumber} from "../../Time";
import {showBlock} from "../../Redux/Slices/sideBlockSlice";

const Home = () => {
    const items = useSelector((state: RootState) => state.counter.items);
    const text = useSelector((state: RootState) => state.counter.text);
    const dispatch = useDispatch();

    // @ts-ignore
    const onTextChange = (event) => {
        dispatch(onChange(event.target.value));
    }
    const addNewTask = () => {
        dispatch(addTask());
    }
    const finish_Task = (id: number) => {
        dispatch(finishTask(id));
    }
    const delete_Task = (id: number) => {
        dispatch(deleteTask(id))
    }

    // @ts-ignore
    const onTitleChange = (event) => {
        dispatch(onChange(event.target.value));
    }
    const RightClick = (event: MouseEvent, index: number, id: number) => {
        event.preventDefault();
        dispatch(showNewMenu({position: [event.pageX, event.pageY], index: index, id: id}));
    }
    return (
        <div style={{height: '100%'}}>
            <Menu/>
            <div className={s.main} onClick={() => dispatch(hideMenu())}>
                <div className={s.Tasks}>
                    {items.map((task: Item, index) => {
                        console.log(task.date[0])
                        if (task.status === 'active') {
                            return <div onClick={() => dispatch(showBlock(index))}
                                        onContextMenu={(event) => RightClick(event, index, task.id)}
                                        className={s.task} key={index}>
                                <img onClick={() => finish_Task(index)} className={s.imgDone} alt=''
                                     src={task.status === 'active' ? 'https://cdn-icons-png.flaticon.com/512/3515/3515278.png'
                                         : 'https://cdn-icons-png.flaticon.com/512/149/149148.png'}/>
                                <div className={s.title_block}>
                                    <div>{task.title}</div>
                                    <span
                                        className={s.span}>{(DateNumber[0] - task.date[0]) == 0 ? 'сегодня' : DateNumber[0] - task.date[0] + " дня назад"}</span>
                                </div>
                                <img onClick={() => dispatch(starTask(index))} src={task.stared ? favR : fav}
                                     style={{width: 25, height: 25, cursor: "pointer"}}/>
                                <img onClick={() => delete_Task(task.id)} className={s.imgDelete} src={deleteIcon}
                                     alt=''/>
                            </div>
                        }
                    })}
                </div>
                <div className={s.input_and_button}>
                    <input className={s.input} value={text} onChange={onTextChange}/>
                    <button className={s.button} onClick={addNewTask}>Add Task</button>
                </div>
            </div>
        </div>
    );
};

export default Home;

//<span>{(DateNumber[0] - task.date[0]) == 0 ? 'сегодня' : DateNumber[0] - task.date[0] + " дня назад"}</span>
