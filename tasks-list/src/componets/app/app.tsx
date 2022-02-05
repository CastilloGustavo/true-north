import React, {Suspense} from "react"
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { DefultState } from "../../interfaces";
import SelectorTask from "../selectorTask";
import Task from "../task";

const ModalTask = React.lazy(() => import("../modal"));

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
    const { tasklist } = useSelector( (state: DefultState) => state);
    return(<div>
        <Suspense fallback={<div></div>}>
            <ModalTask></ModalTask>
        </Suspense>
       
        <Header>
            <TitleLabel> Welcome to My test To TrueNort </TitleLabel>
            <SelectorTask></SelectorTask>
        </Header>
        <Body>
            {tasklist.map( x => <Task title={x.title} description={x.description} ></Task>)}
        </Body>
    </div>)
}

export default App;