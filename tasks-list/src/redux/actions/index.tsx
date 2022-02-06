import TaskProps, { setVisibleModalParamsRedures } from "../../interfaces";

const typeSetTaskList = 'setTaskList';
const typeSetVisibleModal = 'setVisibleModal';

const setTaskList = (taskList : TaskProps[])=> {
    return{
        type: typeSetTaskList,
        payload : taskList,
    };
};

const setVisibleModal = (param : setVisibleModalParamsRedures)=> {
    return{
        type: typeSetVisibleModal,
        payload : param,
    };
};



export {typeSetTaskList, setTaskList }
export {typeSetVisibleModal, setVisibleModal }