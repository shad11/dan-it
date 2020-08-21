const API_URL = 'http://api.ipify.org/?format=json';
const API_URL_INFO = 'http://ip-api.com/json';
const INFO_FIELDS = ['continent', 'country', 'regionName', 'city', 'district'];

const fetchURL = (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            return new Promise( (res, rej) => rej(`Can't get info: ${error}`))
        });
};

const renderIpInfo = (data) => {
    const infoEl = document.querySelector('.info');
    const fragment = new DocumentFragment();

    for (const field of INFO_FIELDS) {
        const elem = document.createElement('p');
        elem.innerHTML = `${field.charAt(0).toUpperCase()}${field.slice(1)}: ${data[field]||'Unknown'}`;

        fragment.append(elem);
    }

    infoEl.innerHTML = '';
    infoEl.append(fragment);
};

const showIpInfo = () => {
    fetchURL(API_URL)
        .then(({ip}) => fetchURL(`${API_URL_INFO}/${ip}?fields=${INFO_FIELDS.join(',')}`))
        .then(data => renderIpInfo(data))
        .catch(error => console.error(error));
};

onReady = () => {
    document.querySelector('.find-btn').addEventListener('click', showIpInfo);
};

document.addEventListener('DOMContentLoaded', onReady);