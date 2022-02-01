import React from "react"
import styled from 'styled-components';

const ListTask = styled.select({
    border: '1px solid black',
    minHeight: '16px',
    margin:'8px',
    minWidth:'64px',
})


const SelectorTask = (props: any) =>{
    return(<div>
        <ListTask>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </ListTask>
    </div>)
}

export default SelectorTask;