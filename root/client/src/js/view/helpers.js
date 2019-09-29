function changePage(page, nextPage) {
	page.classList.add('inactive');
	nextPage.classList.remove('inactive');
}

export { changePage };
