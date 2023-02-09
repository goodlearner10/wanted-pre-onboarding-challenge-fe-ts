class Todo {
  constructor(id, content = '', isDone = false, category, tags) {}

  updateContent(content) {}

  updateCategory(category) {}

  updateState() {}

  updateNewTag(tag) {}

  deleteTag(tag) {}

  deleteAllTags() {}
}

class TodoList {
  constructor(todoList = []) {}

  createTodo(content, category, tags) {}

  findAllTodos() {}

  findTodo(id) {}

  deleteTodo(id) {}

  deleteAllTodos() {}
}
