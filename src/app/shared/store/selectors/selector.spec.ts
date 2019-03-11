import * as TodoSelectors from '../selectors/selector';


describe('todos Selector' , () => {

    describe('Todo list selectors', () => {
      it ('should return null', () => {
            const mockState = {
                todos: {
                    data: null,
                    loading: null,
                    loaded: null,
                    error: null
                }
            };
          expect(TodoSelectors.todoListSelector(mockState)).toEqual(null);

        });
    });
});
