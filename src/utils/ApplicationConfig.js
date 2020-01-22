const ApplicationConfig = (() => {
    let instance;
    const WEATHER_URL = 'http://localhost:3001/v1';
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