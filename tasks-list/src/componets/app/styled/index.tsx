import styled from 'styled-components';
import { bluePrimary, blueSecundary } from '../../../config/colors';

const Header = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 64px;
    background-color: ${bluePrimary};
    color: ${blueSecundary};
    font-size: 24px;
    font-weight: 800;
`

const Body = styled.div({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: '64px',
    height: 'auto',
    width: 'auto',
    padding: '16px',
})

const TitleLabel = styled.span({
    margin: '16px'
})


export {Header, Body, TitleLabel}