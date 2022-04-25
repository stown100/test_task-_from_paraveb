class Api {
    constructor({ url }) {
        this.url = url;
    }

    getInitialCards() {
        return fetch(this.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(this._handleResponse)
    }

    _handleResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const api = new Api({
    url: 'https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc',
})

export default api;