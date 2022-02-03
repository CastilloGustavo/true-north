import React from "react"
import styled from 'styled-components';
import SelectorTask from "../selectorTask";
import Task from "../task";

const Header = styled.div({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    minHeight: '64px',
    margin:'8px'
})

const Body = styled.div({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    border: '1px solid black',
    minHeight: '64px',
    height: 'auto',
    width: 'auto',
    padding: '16px',
})

const TitleLabel = styled.span({
    margin: '16px'
})


const App = (props: any) =>{
    return(<div>
        <Header>
            <TitleLabel> Welcome to My test To TrueNort </TitleLabel>
            <SelectorTask></SelectorTask>
        </Header>
        <Body>
            <Task title="Gus" description="Leegue" ></Task>
            <Task title="Gus2" description="Leegue2" ></Task>
            <Task title="Gus3" description="Leegue" ></Task>
            <Task title="Gus4" description="Leegue2" ></Task>
        </Body>
    </div>)
}

export default App;