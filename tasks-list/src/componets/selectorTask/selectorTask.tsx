import React, {EventHandler, useEffect, useState} from "react"
import styled from 'styled-components';
import TaskProps, { TaskItem } from "../../interfaces";
import config from '../../config/default.json'
import { useDispatch } from "react-redux";
import { setTaskList } from "../../redux/actions";

const ListTask = styled.select({
    border: '1px solid black',
    minHeight: '16px',
    margin:'8px',
    minWidth:'64px',
})

const GetItemList = () =>{
    let results: TaskItem[] = [];
    config.optionSelectors.forEach( (x: { value: any; description: any; }) =>{
        results.push({value: x.value, description:x.description})
    })
    return results;
}

const createWrapperItems = ( count: number) : TaskProps[] => {
    const result :TaskProps[] = [];
    for (var i = 0; i < count; i++) {
        const item : TaskProps ={
            title: `Test Title ${i + 1}`,
            description: 'Descripcion de test' 
        }
        result.push(item);
     }
    return result;
}


const SelectorTask = (props: any) =>{
    const dispatch = useDispatch();
    const [itemSelect ,setItemSelect] = useState(0);

    useEffect(()=>{
        const wrapperList = createWrapperItems(config.defaultSelectorValue);
        dispatch(setTaskList(wrapperList));
        setItemSelect(config.defaultSelectorValue)
    },[])
   
    const onClickItemSelectec = (params: React.ChangeEvent<HTMLSelectElement>) =>{
        const valueSelect: number =parseInt(params.target.value)
        setItemSelect(valueSelect)
        const wrapperList = createWrapperItems(valueSelect);
        dispatch(setTaskList(wrapperList))
    }

    return(<div>
        <ListTask value={itemSelect} onChange={onClickItemSelectec}>
            {GetItemList().map(x => <option key={x.value} value={x.value}>{x.description}</option>)}
        </ListTask>
    </div>)
}

export default SelectorTask;