<script>
    export let addTodo;

    let content;
    const onSubmit = () => {
        const todo = {
            content,
            checked: false,
        };
        content = "";

        addTodo(todo);
    }

</script>

<form on:submit|preventDefault={onSubmit}>
    <input name="todo" type="text" placeholder="Enter todo" bind:value={content} autocomplete="off"/>
</form>


<style>
    input {
        width: 100%;
        padding: 10px 20px;
        border-style: none;
        font-size: 1.5em;
        
    }

    input:focus {
        outline: none;
        
    }
</style>