// Action types
const GET_MOVIES = 'my-app/movies/GET_MOVIES'; // declarando uma ação, nome que explica a ação com o caminho de 'nomeDoProjeto/nomeDoModulo/nomeDaAção'
const GET_SERIES = 'my-app/movies/GET_SERIES'
const SELECT_OPTION = 'my-app/movies/SELECT_OPTION'
// InitialState
export const initialState = { // estados iniciais
  movies: [],
  series: [],
  menuoption: '',
}

// Reducers
export default (state = initialState, action) => {
  switch (action.type) { // estrutura de decisão de acordo com a action acionada
    case GET_MOVIES: // nome da action
      return {
        ...state, // descontruçao para manter os outros estados 
        movies: action.info, // informação que recebo para alterar o estado selecionado
      };
      case GET_SERIES: // nome da action
      return {
        ...state, // descontruçao para manter os outros estados 
        series: action.info, // informação que recebo para alterar o estado selecionado
      };
      case SELECT_OPTION: // nome da action
      return {
        ...state, // descontruçao para manter os outros estados 
        menuoption: action.info, // informação que recebo para alterar o estado selecionado
      };
    default: // se não encaixar em nenhuma action, segue com o estado inicial
      return state
  }
}



// Action Creators
export const getMovies = (info) => ({ // exportação da action para os componentes
  type: GET_MOVIES, // nome da action, nunca esquecer
  info // informação enviada pelo componente por parametro
});

export const getSeries = (info) =>({
  type: GET_SERIES,
  info
})

export const selectOption = (info) =>({
  type: SELECT_OPTION,
  info
})