// Action types
const GET_MOVIES = 'my-app/movies/GET_MOVIES'; // declarando uma ação, nome que explica a ação com o caminho de 'nomeDoProjeto/nomeDoModulo/nomeDaAção'

// InitialState
export const initialState = { // estados iniciais
  movies: [],
}

// Reducers
export default (state = initialState, action) => {
  switch (action.type) { // estrutura de decisão de acordo com a action acionada
    case GET_MOVIES: // nome da action
      return {
        ...state, // descontruçao para manter os outros estados 
        movies: action.info, // informação que recebo para alterar o estado selecionado
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
