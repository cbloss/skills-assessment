// Toggles email / phone display.
function showHideDetail() {
	const obj = document.getElementById("view-switch");
	const value = obj.options[obj.selectedIndex].value;
	if (value == "phone") {
		Array.from(document.getElementsByClassName('email')).forEach((el) => {
			hideElement(el);
		});

		Array.from(document.getElementsByClassName('phone')).forEach((el) => {
			showElement(el);
		});
	} else {
		Array.from(document.getElementsByClassName('phone')).forEach((el) => {
			hideElement(el);
		});

		Array.from(document.getElementsByClassName('email')).forEach((el) => {
			showElement(el);
		});
	}
}

function showElement(ele) {
	ele.style.display = 'block';
}

function hideElement(ele) {
	ele.style.display = 'none';
}

// Closes overlay and active class.
function closeActive() {
	document.querySelectorAll('section.active')[0].classList.remove('active');
	document.body.className = document.body.className.replace('open', '');
}

function makeActive(ele) {
	document.body.classList.add('open');

	ele.classList.add('active');
}

function handleRowAction(event) {
	const clickedElement = event.target;
	const detailCheck = clickedElement.closest('.full-info');

	// Don't close active if they click on anything in the full details area.
	if (detailCheck != null) {
		return ;
	}

	let ele = clickedElement.closest('section');

	// If they click on an active row, just close it and the overlay.
	if (ele.classList.contains('active')) {
		closeActive();
	} else {
		makeActive(ele);
	}
}

const sectionList = document.getElementsByTagName('section');

for (let i = 0; i < sectionList.length; i++) {
    sectionList[i].addEventListener('click', handleRowAction);
}