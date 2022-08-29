import React from 'react';
import s from './Menu.module.css';
import {RootState} from "../../Redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
import archive from '../../Assets/archive.png';
import star from '../../Assets/starL.png';
import starY from '../../Assets/starY.png';
import deleteTrush from '../../Assets/deleteTrush.png';
import {archiveTask, deleteTask, starTask} from "../../Redux/Slices/counterSlice";


const Menu = () => {
    const isVisible = useSelector((state: RootState) => (state.menu.isVisible));
    const position = useSelector((state: RootState) => (state.menu.position));
    const index = useSelector((state: RootState) => (state.menu.index));
    const id = useSelector((state: RootState) => (state.menu.id));
    const items = useSelector((state: RootState) => (state.counter.items));

    const dispatch = useDispatch();
    if(isVisible){
        return <div className={s.main} style={{top: position[1], left: position[0]}}>
                <div onClick={() => dispatch(starTask(index))}>
                    <img src = {items[index].stared? starY: star}/> Priority
                </div>
                <div onClick={() => dispatch(archiveTask(index))}>
                    <img src = {archive}/> Archive
                </div>
            <div style={{height: 1, width: 100, backgroundColor: '#D6CEC3'}}/>
                <div onClick = {() => dispatch(deleteTask(id))} style = {{marginTop: -2}}><img src = {deleteTrush}/> Delete</div>
        </div>
    } else {
        return <div></div>
    }

};

export default Menu;
