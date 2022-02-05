interface TaskProps {
    title: string;
    description: string;
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

export type {DefultState , ParamsReduders, TaskItem}
export default TaskProps;