import React from "react"
import styled from 'styled-components';
import SelectorTask from "../selectorTask";

const Header = styled.div({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    minHeight: '64px',
    margin:'8px'
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
        <h1> Primer paso react</h1>
    </div>)
}

export default App;