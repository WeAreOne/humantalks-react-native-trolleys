const ENDPOINT = 'https://opendata.bristol.gov.uk/resource/b2rs-9trd.json';
class DataService {
    static all() {
        return fetch(ENDPOINT).then(res => res.json());
    }
}

export default DataService;