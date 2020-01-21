const ApplicationConfig = (() => {
    let instance;
    const WEATHER_URL = 'https://api.gismeteo.net/v2/search/cities/?';
    const WEATHER_TOKEN = '56b30cb255.3443075';

    const setProperty = (prop, value) => {
        instance[prop] = value;
    };

    const init = () => ({
        WEATHER_URL,
        WEATHER_TOKEN,
        setProperty
    });

    return {
        getInstance: () => {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

export default ApplicationConfig.getInstance();