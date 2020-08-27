const API_URL = 'http://api.ipify.org/?format=json';
const API_URL_INFO = 'http://ip-api.com/json';
const INFO_FIELDS = ['continent', 'country', 'regionName', 'city', 'district'];

const fetchURL = (url) => {
    return fetch(url)
        .then(response => response.json());
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

const showIpInfo = async () => {
    const { ip } = await fetchURL(API_URL);
    const info = await fetchURL(`${API_URL_INFO}/${ip}?fields=${INFO_FIELDS.join(',')}`);

    renderIpInfo(info);
};

onReady = () => {
    document.querySelector('.find-btn').addEventListener('click', showIpInfo);
};

document.addEventListener('DOMContentLoaded', onReady);