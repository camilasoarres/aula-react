// Libs
import { createStore, combineReducers } from 'redux';
// createStore = gerencia loja de estados, store = módulos da aplicação(todo o projeto)
// combineReducers = função padrão da lib que ajeita a combinação dos seus módulos (movies e series) para criação da store

// Reducers = módulo que controla os estados da aplicação
import Movies from './modules/movies-module';

const reducers = combineReducers({
  movies: Movies,
});

export const Store = createStore( // criando de fato a store
  reducers, // passando como parametro os meus módulos
  {}, // segundo parametro que poderia ter algo, mas vamos enviar vazio
  window.__REDUX_DEVTOOLS_EXTENSION__ // parametro para exibir no extensão do redux apenas ações da aplicação (estados e ação acionadas)
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);