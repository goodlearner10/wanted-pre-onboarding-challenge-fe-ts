interface Todo {
  id: string;
  content: string;
  isDone: boolean;
  category: string;
  tags?: string[];
}

interface TodoMethod {
  updateContent(content: string): void;
  updateCategory(category: string): void;
  updateState(): void;
  updateNewTag(tag: string): void;
  deleteTag(tag: string): void;
  deleteAllTags(): void;
}

interface TodoList {
  todoList: Todo[];
}

interface TodoListMethod {
  createTodo(todoObj: Todo): void;
  findAllTodos(): Todo[];
  findTodo(id: string): Todo;
  deleteTodo(id: string): Todo[];
  deleteAllTodos(): void;
}
