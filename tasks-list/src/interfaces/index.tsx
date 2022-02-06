interface TaskProps {
    title: string;
    description: string;
}

interface ModalProps {
    title: string;
    description: string;
    visible: boolean;
}

interface TaskItem {
    value: number,
    description: string,
}


interface DefultState {
    tasklist: TaskProps[];
    showModal: boolean;
    infoModal: TaskProps;
}

interface ParamsReduders {
    type: string,
    payload: any,
}

interface setVisibleModalParamsRedures{
    infoModal: TaskProps,
    showModal: boolean,
}

export type {DefultState , ParamsReduders, TaskItem, ModalProps, setVisibleModalParamsRedures}
export default TaskProps;