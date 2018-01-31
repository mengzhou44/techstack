export default (state = null, action) => {
    switch (action.type) {
        case 'library_selected':
            return { id: action.payload };
        default:
            return state;
    }
};

