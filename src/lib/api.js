const IP = "http://167.71.102.23:3000/todos/";

const getTodoList = async () => {
    const res = await fetch(IP).then(res => res.json());
    
    if (res.status !== "success") {
        throw "fetch failed";
    }

    const todoList = res.data;
    return todoList;
}

const postTodo = async (todo) => {
    const res = await fetch(IP, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json",
            "Content-Length": `${JSON.stringify(todo).length}`
        }
    })
    .then(res => res.json());

    if (res.status !== "success") {
        throw "fetch failed";
    }

    const registedTodo = res.data;
    return registedTodo;
}

const patchTodo = async ({checked, id}) => {
    const res = await fetch(`${IP}/${id}`, {
        method: "PATCH",
        body: JSON.stringify({checked}),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
    .then(res => res.json());

    if (res.status !== "success") {
        throw "fetch failed";
    }

    const patchedTodo = res.data;
    return patchedTodo;
}

const deleteTodo = async (id) => {
    const res = await fetch(`${IP}/${id}`, {
		method: "DELETE"
	});
    
    // if (res.status !== "success") {
    //     throw "fetch failed";
    // }
}

export { getTodoList, postTodo, patchTodo, deleteTodo };