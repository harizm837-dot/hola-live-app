// Simple Event Bus System

const LiveEvent = (() => {
    const events = {};

    function on(event, listener) {
        if (!events[event]) {
            events[event] = [];
        }
        events[event].push(listener);
    }

    function emit(event, data) {
        if (events[event]) {
            events[event].forEach(listener => listener(data));
        }
    }

    return { on, emit };
})();
