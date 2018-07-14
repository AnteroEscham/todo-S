import { todoList } from './add-todo';

todoList.addEventListener('click', e => {
	const target = e.target,
		btn = target.closest('.todo__check-btn'),
		close = target.closest('.todo__close'),
		item = target.closest('.todo__item'),
		checkbox = item.querySelector('.todo__check-input');

	if (close) {
		todoList.removeChild(item);
	}
	else if (btn) {
		!checkbox.checked ? item.classList.add('todo__item--completed') : item.classList.remove('todo__item--completed');
	}
});