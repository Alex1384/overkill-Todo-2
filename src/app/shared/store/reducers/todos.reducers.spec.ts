import * as TodosReducer from './todos.reducers';
import * as TodosActions from '../actions/todos.action';

   describe('Todo reducer', () => {

    it('It should return initialState', () => {
      const { initialState } = TodosReducer;
      const action = {} as any;
      expect(TodosReducer.todosReducer(undefined, action)).toEqual(initialState);
    });

    it('State should have an error when FecthTodoErrorAction', () => {
      const { initialState } = TodosReducer;
      const fetchTodoErrorAction = new TodosActions.FetchTodoError('Erreur');
      const state = TodosReducer.todosReducer(initialState, fetchTodoErrorAction);
      expect(state.error).toEqual('Erreur');
    });

  });
