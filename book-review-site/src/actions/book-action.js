const addBook = (book) => {
    return {
        type: "ADD",
        payload: book
    }
};

export default addBook;