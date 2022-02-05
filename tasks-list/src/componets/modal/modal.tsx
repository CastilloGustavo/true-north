import React from "react"
import styled from 'styled-components';
import TaskProps from "../../interfaces";

// const TaskContainer = styled.div`
//     max-width: '600px';
//     min-width: '300px';
//     min-height: '150px';
//     max-height: '300px';  
//     min-width:'64px';
//     z-index: 1000;
//   ;
// `;

const MainContainer = styled.div({
    maxWidth: '600px',
    minWidth: '300px',
    minHeight: '150px',
    maxHeight: '300px', 
    border: '1px solid blue',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex:1000,
    display: 'none',
})


const ModalTask = () =>{
    return(<MainContainer>
            <h1>Soy un modal</h1>
    </MainContainer>)
}

export default ModalTask;