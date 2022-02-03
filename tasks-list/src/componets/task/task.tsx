import React from "react"
import styled from 'styled-components';
import TaskProps from "../../interfaces";

const TaskContainer = styled.div`
    width: '100%';
    min-height: '64px';  
    min-width:'64px';
    display: 'flex';
    flex-direction: 'column';
`;

const MainContainer = styled.div({
    width: '400px',
    padding: '16px',
    border: '1px solid blue'
})


const Task = (props: TaskProps) =>{
    const {title, description} = props;
    return(<MainContainer>
        <TaskContainer>
            <h1>{title}</h1>
            <span>{description}</span>
        </TaskContainer>
    </MainContainer>)
}

export default Task;