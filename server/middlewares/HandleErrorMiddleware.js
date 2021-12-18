const HandleErrorMidleware = (error, request, response, next) => {
    if (error.status !== 404) {
        console.log(error.stack);
    }
    response.status(error.status || 500).json({ error: error.message });
}

export default HandleErrorMidleware;