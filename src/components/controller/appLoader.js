import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '5bb470c44d244ea68261255a8222a824', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
