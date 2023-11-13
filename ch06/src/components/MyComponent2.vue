<template>
  <h4>MyComponent2</h4>
  <p>
    <input type="text" v-model="text" placeholder="할 일 입력" />
    <button @click="btnAdd">등록</button>
    <button @click="btnClear">초기화</button>
  </p>
  <table border="1">
    <tr>
      <th>번호</th>
      <th>할일</th>
      <th>상태</th>
      <th>관리</th>
    </tr>
    <tr v-for="todo in todosStore.todos">
      <td>{{ todo.id }}</td>
      <td>{{ todo.text }}</td>
      <td class="done" v-if="todo.isFinished">완료</td>
      <td class="notyet" v-else="todo.isFinished">미완료</td>
      <td>
        <button @click="btnRemove(todo.id)">삭제</button>
        <button @click="btnDone(todo.id)">완료</button>
      </td>
    </tr>
  </table>

  <table border="1">
    <caption>
      완료된 할 일
    </caption>
    <tr>
      <th>번호</th>
      <th>할일</th>
      <th>상태</th>
    </tr>
    <tr v-for="todo in todosStore.finishedTodos">
      <td>{{ todo.id }}</td>
      <td>{{ todo.text }}</td>
      <td class="done" v-if="todo.isFinished">완료</td>
      <td>
        <button @click="btnRemove(todo.id)">삭제</button>
        <button @click="btnDone(todo.id)">완료</button>
      </td>
    </tr>
  </table>

  <table border="1">
    <caption>
      미완료된 할 일
    </caption>
    <tr>
      <th>번호</th>
      <th>할일</th>
      <th>상태</th>
    </tr>
    <tr v-for="todo in todosStore.unfinishedTodos">
      <td>{{ todo.id }}</td>
      <td>{{ todo.text }}</td>
      <td class="done" v-if="todo.isFinished">완료</td>
      <td>
        <button @click="btnRemove(todo.id)">삭제</button>
        <button @click="btnDone(todo.id)">완료</button>
      </td>
    </tr>
  </table>
</template>
<script setup>
import { ref } from "vue";
import { useTodos } from "../store/todos";

//전역스토어 가져오기
const todosStore = useTodos();

const text = ref(null);

//핸들러
const btnAdd = () => {
  todosStore.addTodo(text.value);
};

const btnDone = (id) => {
  todosStore.doneTodo(id);
};

const btnRemove = (id) => {
  todosStore.removeTodo(id);
};

const btnClear = () => {
  todosStore.clearTodo();
};
</script>
<style scoped>
.done {
  color: green;
}
.notyet {
  color: red;
}
</style>
