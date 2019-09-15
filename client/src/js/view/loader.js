const loading = document.querySelector('#loading-search');
const showLoading = () => loading.classList.remove('inactive');
const hideLoading = () => loading.classList.add('inactive');

export { showLoading, hideLoading };
