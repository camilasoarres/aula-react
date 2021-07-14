import React, { Component } from 'react'
import { connect } from 'react-redux'; // import para conectar com redux
import Movies from './server/Movies'
import styled, { createGlobalStyle } from "styled-components"

// Redux
import { getMovies } from './modules/movies-module';

const mapStateToProps = (state) => ({ // mapeamento dos estados por props do redux
  movies: state.movies.movies
});

const mapDispatchToProps = (dispatch) => ({ // mapeamento das ações por props do redux
  getMovies: (info) => dispatch(getMovies(info)),
});

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
    series: []
  }

  componentDidMount() {
    this.getMoveis()
    this.getSeries()
  }

  getMoveis = async () => {
    const response = await Movies.get(); // chamada da api
    this.props.getMovies(response.data.results); // enviando para o estado do redux a reposta da api com a lista de filmes
  }

  getSeries = async () => {
    const response = await Movies.get()
    this.setState({ // enviando para o estado do componente a reposta da api com a lista de filmes
      series: response.data.results
    })
  }

  renderMovies = () => {
    const movies = this.props.movies.filter((movie) => movie.vote_average >= 8);
    return movies.slice(0, 6).map((movie, index) => {
      const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

      return (
        <Teste key={index}>
          <ImgMovies src={url} alt='Poster' />
          <h1>{movie.title.substr(0, 20)}</h1>
          <ParagrapSinopse>{movie.overview.substr(0, 200)} ...</ParagrapSinopse>
          <h3> {movie.vote_average}</h3>
        </Teste>
      )

    });
  }


  render() {
    return (
      <Container>
        <GlobalStyle />
        {this.props.movies.length > 0 && (
          <BoxCards>
            {/* { this.props.movies.map((movie)=>(
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
// usar conexão para acessar estado e disparo de função do redux