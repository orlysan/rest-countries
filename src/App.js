import React, { useState } from 'react';
import styled from 'styled-components'
import CountriesList from './components/CountriesList';
import Filter from './components/Filter';
import Header from './components/Header';
import Search from './components/Search';

function App() {

  
  return (
    <Container className="App">
     <Header />
     <TopContainer>
        <Search />
        <Filter />
     </TopContainer>
    
    < CountriesList />
    </Container>
  );
}

const TopContainer = styled.div`
display:flex;
justify-content:space-between;
padding: 0 2.5rem;
`

const Container =styled.div`
box-sizing: border-box;
`
export default App;
