import React, {Suspense} from "react"
import { useSelector } from 'react-redux'
import { DefultState } from "../../interfaces";
import SelectorTask from "../selectorTask";
import Task from "../task";
import { Body, Header, TitleLabel } from "./styled";

const ModalTask = React.lazy(() => import("../modal"));

const App = (props: any) =>{
    const { tasklist, showModal, infoModal } = useSelector( (state: DefultState) => state);
    return(<div>
        <Suspense fallback={<div></div>}>
            <ModalTask title={infoModal.title} description={infoModal.description} visible={showModal}></ModalTask>
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