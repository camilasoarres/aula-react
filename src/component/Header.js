import React from 'react'
import styled from "styled-components"
import { connect } from 'react-redux'
import { selectOption } from '../modules/movies-module'

const mapDispatchToProps = (dispatch) =>({
    selectOption: (info) => dispatch(selectOption(info))
})

const Container = styled.div`
    width: 100%;
    background-color: black;
    height: 4rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

`
const BoxOptions = styled.div`
    display: flex;
    justify-content: space-around;
    width: 20%;
`
const Options = styled.p`
cursor: pointer;
 &:hover{
     color: red;
 }
`


const Header = (props) => {  
    return(
    <Container>
        <BoxOptions>
        <Options onClick={()=> props.selectOption('Filmes')} >Filmes</Options>
        <Options onClick={()=> props.selectOption('Series')} >Series</Options>
        </BoxOptions>
    </Container>
    )
}
export default connect(null, mapDispatchToProps) (Header);