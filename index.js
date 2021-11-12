const hiddenClass = 'hidden-content';

toggleContent = (item) => {
	let arrow = document.querySelector(`${item}-trigger > i`);
	arrow.classList.toggle('rotate0');
	arrow.classList.toggle('rotate90');
	
	let content = document.querySelector(`${item}-content`);
	content.classList.toggle(hiddenClass);
}