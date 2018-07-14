const todoList = document.querySelector('.todo__list'),
	addInput = document.querySelector('.todo__input'),
	enter = document.querySelector('.todo__enter');

function addTodo (text) {
	const fragment = document.createDocumentFragment();
	let item = document.createElement('li'),
		check = document.createElement('div'),
		label = document.createElement('label'),
		input = document.createElement('input'),
		checkBtn = document.createElement('div'),
		name = document.createElement('div'),
		close = document.createElement('div');
	
	item.classList.add('todo__item');
	check.classList.add('todo__check');
	label.classList.add('todo__check-label');
	input.type = 'checkbox';
	input.classList.add('todo__check-input');
	checkBtn.classList.add('todo__check-btn');
	name.classList.add('todo__name');
	name.innerText = text;
	close.classList.add('todo__close');
	check.appendChild(label);
	label.appendChild(input);
	label.appendChild(checkBtn);
	item.appendChild(check);
	item.appendChild(name);
	item.appendChild(close);
	fragment.appendChild(item);

	todoList.appendChild(fragment);
}

addInput.addEventListener('keypress', e => {
	const value = addInput.value;

	if (e.keyCode == 13 && value.length > 0) {
		addTodo(value);
		addInput.value = '';
	}
});

enter.addEventListener('click', () => {
	const value = addInput.value;

	addTodo(value);
	addInput.value = '';
});

export {
	addTodo,
	todoList
}