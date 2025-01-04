export const getUserInfo() {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
        headers: {
            authorization: this._token,
        },
    })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
};

export const setUserInfo({ name, about }) {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            about,
        }),
    })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
};

export const setUserAvatar({ avatar }) {
    return fetch(`${this._address}/${this._groupId}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            avatar,
        }),
    })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
};
