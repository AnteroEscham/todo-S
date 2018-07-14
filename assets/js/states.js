import { todoList } from './add-todo';

const states = document.querySelectorAll('.todo__state'),
	clear = document.querySelector('.todo__clear'),
	list = todoList.children;

for (const state of states) {

	state.addEventListener('click', () => {
		const active = document.querySelector('.todo__state--active');
		active.classList.remove('todo__state--active');
		state.classList.add('todo__state--active');
		
		[].forEach.call(list, (e) => {

			if (state.dataset.state == 'completed') {
				e.classList.remove('hidden');

				if (!e.classList.contains('todo__item--completed')) {
					e.classList.add('hidden');
				}
			}

			if (state.dataset.state == 'all') {
				e.classList.remove('hidden');
			}

			if (state.dataset.state == 'active') {
				e.classList.remove('hidden');

				if (e.classList.contains('todo__item--completed')) {
					e.classList.add('hidden');
				}
			}
		});
	});
}

clear.addEventListener('click', () => {
	const completed = [];
	[].forEach.call(list, (e) => {
		if (e.classList.contains('todo__item--completed')) {
			completed.push(e);
		}
	});

	completed.forEach((e) => {
		todoList.removeChild(e);
	});
});

