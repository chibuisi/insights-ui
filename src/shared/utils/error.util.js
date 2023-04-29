
const CHUNK_LOAD_PATTERN = /loading chunk .+ failed/i;

const isChunkError = (err) => {
    if (typeof err === 'string')
        return CHUNK_LOAD_PATTERN.test(err);
    if (err instanceof Error)
        return CHUNK_LOAD_PATTERN.test(err.message);
    return false;
}

const tryHandleChunkLoadFailure = () => {
    try {
        const key = 'Minor-Insights:Failed-Chunk-Load';
        let tries = localStorage.getItem(key);

        tries = tries != null ? parseInt(tries, 10) : 0;

        if (!window.isNaN(tries) && tries < 5) {
            localStorage.setItem(key, tries + 1);
            window.location.reload(true);
        }
    }
    catch (error) {
        window.location.reload(true);
    }
}

export const handleError = (err) => {
    if (isChunkError(err)) {
        return tryHandleChunkLoadFailure();
    }
    throw err;
}

export const handlePromiseRejections = () => {
    const oldUnhandledRejection = window.onunhandledrejection;

    window.onunhandledrejection = (event) => {
        if (isChunkError(event.reason) && typeof event.preventDefault === 'function'){
        tryHandleChunkLoadFailure();
        event.preventDefault();
        }
        else if (typeof oldUnhandledRejection === 'function') {
            // eslint-disable-next-line no-undef
            oldUnhandledRejection.apply(window, arguments);
        }
    };
};

