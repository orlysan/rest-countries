
import styled from 'styled-components'
import React, { useState } from 'react';

function Search () {

    const [searchVal, setSearchVal] = useState('');
    console.log(searchVal)

    return(
        <Container>
            <Input 
                placeholder="Search for a country..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                >
                
            </Input>
            <span class="material-icons">search</span>
        </Container>
    )
}

const Container = styled.div`
   display:flex;
`

const Input = styled.input`
    width:20rem;
    height: 2.5rem;
    border-radius: 3px;
    border: 0.3px #cfcccc solid;
    padding-left: 1rem;
`

export default Search;