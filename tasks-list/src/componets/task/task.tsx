import React from "react"
import styled from 'styled-components';
import TaskProps, { setVisibleModalParamsRedures } from "../../interfaces";
import { useDispatch } from "react-redux";
import { setVisibleModal } from "../../redux/actions";
import { blueSecundary, blueTerc } from "../../config/colors";
const TaskContainer = styled.div`
    width: '100%';
    min-height: '64px';  
    min-width:'64px';
    display: 'flex';
    flex-direction: 'column';
`;



const MainContainer = styled.div`
    width: 400px;
    padding: 16px;
    margin: 16px; 
    border-radius: 16px;
    background-color: ${blueTerc};
`




const Task = (props: TaskProps) =>{
    const {title, description} = props;
    const dispatch = useDispatch();

    const onClickTask = () =>{
        const paramReducer: setVisibleModalParamsRedures ={
            showModal: true,
            infoModal: {
                title: title,
                description: description,        
            }
        }
        dispatch(setVisibleModal(paramReducer));
    }

    return(<MainContainer  onClick={onClickTask}>
        <TaskContainer>
            <h1>{title}</h1>
            <span>{description}</span>
        </TaskContainer>
    </MainContainer>)
}

export default Task;