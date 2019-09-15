const loading = document.querySelector('#loader');
const showLoading = () => loading.classList.remove('inactive');
const hideLoading = () => loading.classList.add('inactive');

export { showLoading, hideLoading };
