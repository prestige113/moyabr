function warn(error) {
    console.warn(error.message || error);
}

export default function promiseMiddleware() {
    return store => next => action => (typeof action.then === 'function' ? Promise.resolve(action).then(next, warn) : next(action));
}