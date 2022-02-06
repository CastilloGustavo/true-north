import {setTaskList,typeSetTaskList, typeSetVisibleModal} from '../actions';
import TaskProps, { DefultState, ParamsReduders } from '../../interfaces';


const infoModalDefault: TaskProps = {
    title: 'Soy modal uno',
    description: 'Description modal uno',
}

const defaultState: DefultState = {
    tasklist: [],
    showModal: false,
    infoModal: infoModalDefault,
}

const reducer = (state = defaultState, paramsReduders: ParamsReduders) =>{
    switch(paramsReduders.type){
        case typeSetTaskList:{
            return {
                ...state,
                tasklist: Object.assign([],paramsReduders.payload),
            }
        }
        case typeSetVisibleModal:{
            return{
                ...state,
                infoModal:paramsReduders.payload.infoModal,
                showModal: paramsReduders.payload.showModal
            }
        }
        default: 
        return state;
    }
}


export default reducer;