import React, { Component } from 'react'
import Movies from './server/Movies'
import Series from './server/Series'
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
const Container = styled.div`
  background-color: #37E6A8;
  height: 100%;
  display: flex ;
  `
const BoxCards = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
  margin: 0 1rem;
  `
const ParagrapSinopse = styled.p`
  width:30rem;
`
const Teste = styled.div`
  background-color:#30C3FC;
  margin: 1rem;
  border-radius: 10px;
`
const ImgMovies = styled.img`
`

class App extends Component {
  state = {
    movies: [],
    series: []
  }

  componentDidMount() {
    this.getMoveis()
    this.getSeries()
  }

  getMoveis = async () => {
    const response = await Movies.get()
    this.setState({
      movies: response.data.results
    })
  }

  getSeries = async () => {
    const response = await Movies.get()
    this.setState({
      series: response.data.results
    })
  }

  renderMovies = () => {
    const movies = this.state.movies.filter((movie) => movie.vote_average >= 8);
    return movies.slice(0, 6).map(movie => {
      const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      console.log(movie)
      return (
        <Teste>
          <ImgMovies src={url} alt='Poster' />
          <h1>{movie.title.substr(0, 20)}</h1>
          <ParagrapSinopse>{movie.overview.substr(0, 200)} ...</ParagrapSinopse>
          <h3> {movie.vote_average}</h3>
        </Teste>
      )

    });
  }


  render() {
    console.log(this.state.movies)
    return (
      <Container>
        <GlobalStyle />
        {this.state.movies.length > 0 && (
          <BoxCards>
            {/* { this.state.movies.map((movie)=>(
              <div>
                <p>{movie.title} - {movie.overview}</p>
                <h2> {movie.vote_average} </h2>
              </div>
            ))} */}
            {this.renderMovies()}
          </BoxCards>
        )}
      </Container>
    )
  }
}

export default App;