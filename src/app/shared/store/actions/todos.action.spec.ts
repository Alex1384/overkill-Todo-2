import * as TodosAction from './todos.action';

describe('Todos actions', () => {

  describe('CreateTodoAction', () => {

    it('It should create a todo', () => {
      const payload = {
        content: 'Hello',
        done: true,
        description: 'Hello Everyone'
      };
      const action = new TodosAction.CreateTodo(payload);

      expect({...action}).toEqual({
        type: TodosAction.TODO_CREATE,
        payload
      });
    });
  });

  describe('TodoDeleteErrorAction', () => {

    it('It should send an error', () => {
      const payload = {
        message: 'error'
      };
      const action = new TodosAction.DeleteTodoError(payload);

      expect({...action}).toEqual({
        type: TodosAction.TODO_DELETE_ERROR,
        payload
      });
    });

    it('It should DELETE A todo', () => {
      const payload =  'error';
      const action = new TodosAction.DeleteTodo(payload);

      expect({...action}).toEqual({
        type: TodosAction.TODO_DELETE,
        payload
      });
    });
  });
});
