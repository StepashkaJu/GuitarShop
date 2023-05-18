class Error {

    render() {

        const html = `
        <div class="error-container">
            <div class="error-message">
                <h3>Ошибка доступа!</h3>
                <p>Повторите попытку позже!</p>
            </div>
        </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}
const errorPage = new Error();
