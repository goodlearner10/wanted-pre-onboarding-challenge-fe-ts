/**
 * 투두를 객체를 생성하는 클래스
 */
class Todo {
  /**
   * @param {string} id - 식별 아이디(required)
   * @param {string} [content=''] - 내용(optional)
   * @param {boolean} [isDone=false] - 완료여부(optional)
   * @param {string} category - 카테고리(required)
   * @param {string[]} [tags] - 태그(optional)
   */
  constructor(id, content = '', isDone = false, category, tags) {}

  /**
   * 투두 내용을 수정한다.
   * @param {string} content - 수정할 할일 내용
   * @returns {void}
   */
  updateContent(content) {}

  /**
   * 투두 카테고리를 수정한다.
   * @param {string} category - 수정할 할일 카테고리
   * @returns {void}
   */
  updateCategory(category) {}

  /**
   * 투두 완료여부를 수정한다.
   * 이전 boolean값을 기준으로 반대의 값을 가지게 된다.
   * @returns {void}
   */
  updateState() {}

  /**
   * 새 투두 태그를 추가한다.
   * @param {string} tag - 추가할 태그명
   * @returns {void}
   */
  updateNewTag(tag) {}

  /**
   * 투두 태그를 삭제한다.
   * @param {string} tag - 삭제할 태그명
   * @returns {void}
   */
  deleteTag(tag) {}

  /**
   * 투두의 모든 태그를 삭제한다.
   * @returns {void}
   */
  deleteAllTags() {}
}

/**
 * 투두 목록을 나타내는 클래스
 */
class TodoList {
  /**
   * todoList라는 빈 배열 변수를 선언할 예정이다.
   * @returns {void}
   */
  constructor() {}

  /**
   * class Todo로 인스턴스를 생성한 뒤에 todoList 배열에 푸쉬한다.
   * @param {Todo} todoObj
   * @returns {void}
   */
  createTodo(todoObj) {}

  /**
   * 모든 투두 목록을 확인한다.
   * @returns {Todo[]}
   */
  findAllTodos() {}

  /**
   * id를 받아 특정 투두를 확인한다.
   * @param {string} id - 확인할 특정 투두 아이디
   * @returns {Todo}
   */
  findTodo(id) {}

  /**
   * id를 받아 특정 투두를 삭제한다.
   * @param {string} id - 삭제할 특정 투두 아이디
   * @returns {Todo[]} - 모든 ToDo
   */
  deleteTodo(id) {}

  /**
   * 모든 투두 목록을 삭제한다.
   * @returns {void}
   */
  deleteAllTodos() {}
}
