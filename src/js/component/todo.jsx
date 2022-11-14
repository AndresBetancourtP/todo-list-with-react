import React, { useState } from "react";

const Todo = () => {
	
	const [taskList, setTaskList] = useState(["Limpia el piso", "Friega los platos", "sacar la basura"]);
	const [inputValue, setInputValue] = useState("")

	//handle submit adds a task to the task list and resets the input
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue != "") {
			setTaskList([...taskList, inputValue]);
			setInputValue("");
		}
	};

	const deleteTask = (i) => {
		setTaskList(taskList.filter((_, index) => {
			return index != i
		}))
	}

	return (
		<div className="container d-flex flex-column">
			<div className="text-center">
				<h1>ToDo's List</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => { setInputValue(e.target.value) }}
					value={inputValue}
					type="text"
					placeholder="No tasks, add a task"
				/>
				<ul className="list-group">
					{taskList.map((task, index) => (
						<li key={index} className="list-group-item d-flex justify-content-between">
							<span>
								{task}
							</span>
							<button
								type="button"
								className="btn-close"
								onClick={() => {deleteTask(index)}
								}>
							</button>
						</li>
					))}
				</ul>
			</form>
		</div>
	);
};

export default Todo;
