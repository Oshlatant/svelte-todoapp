<script>
    import TodoInput from "./TodoInput.svelte";
    import Todo from "./Todo.svelte";
    import { writable } from "svelte/store";
    import { onMount } from "svelte";
    import { getTodoList, postTodo, patchTodo, deleteTodo } from "../lib/api";

    const todoList = writable([]);

    const addTodo = async (todo) => {
        try { 
            const registedTodo = await postTodo(todo);

            todoList.update((todoList) => [registedTodo, ...todoList]);
        } catch (error) {
            console.error(error);
        }
    }

    const updateTodo = async (todo, index) => {
        try {
            await patchTodo(todo);

            todoList.update((list) => [...list.slice(0, index), todo,...list.slice(index+1)]);
        } catch (error) {
            console.error(error);
        }
    }

    const removeTodo = async (id, index) => {
        try {
            await deleteTodo(id);

            todoList.update((list) => [...list.slice(0, index), ...list.slice(index+1)]);
        } catch (error) {
            console.error(error);
        }
    }

    onMount(async () => {
        const todos = await getTodoList();

        todoList.set(todos.reverse());
    });

</script>

<div class="wrapper">
    <TodoInput {addTodo}/>
    {#each $todoList as todo, index ( todo.id )}
        <Todo id={todo.id} content={todo.content} checked={todo.checked} {index} {updateTodo} {removeTodo}/>
    {/each}
</div>

<style>
    .wrapper {
        background-color: #00b4d8;
        width: 320px;
        /* height: 320px; */

        display: flex;
        flex-direction: column;
    }
</style>