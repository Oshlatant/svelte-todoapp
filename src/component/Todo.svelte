<script>
    export let id;
    export let content;
    export let checked;
    export let index;
    export let updateTodo;
    export let removeTodo;

    const onCheckboxChange = async () => {
        checked = !checked;

        const changedTodo = {
            content,
            checked,
            id,
        };

        await updateTodo(changedTodo, index);
    }

    const onButtonClick = async () => {
        await removeTodo(id, index);
    }

</script>

<div>
    <input type="checkbox" on:change={onCheckboxChange} {checked}/>
    <span class={ checked ? "overline" : ""}>{content}</span>
    <button on:click={onButtonClick}>X</button>
</div>

<style>
    div {
        padding: 10px;
        border-bottom-style: solid;
        border-width: 1px;
        background-color: #caf0f8;
    }

    .overline {
        text-decoration: line-through;
    }
</style>