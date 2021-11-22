import React from 'react';
import styled from 'styled-components'

function Header () {

    return(
        <PageHeader>
            <H1>Where in the world?</H1>
            <span className="material-icons">dark_mode</span>
            <H2>  Dark Mode</H2>    
        </PageHeader>
    )
}

const PageHeader = styled.header`
    display:flex;
    justify-content: flex-end;
    margin: 1rem auto 2rem auto;
    padding: 0.7rem;
    font-weight: 300;
    border-bottom: 0.5px solid #cfcccc;
`

const H1 = styled.h1`
    flex:3;
    font-size: 20px;
`

const H2 = styled.h2`
    font-size: 18px;

`

export default Header;