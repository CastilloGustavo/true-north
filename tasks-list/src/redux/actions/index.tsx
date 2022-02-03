import TaskProps from "../../interfaces";

const typeSetTaskList = 'setTaskList';

const setTaskList = (taskList : TaskProps[])=> {
    return{
        type: typeSetTaskList,
        payload: taskList,
    };
};



export {typeSetTaskList, setTaskList, }