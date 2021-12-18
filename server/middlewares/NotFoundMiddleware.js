const NotFoundMiddleware = (request, response, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
}

export default NotFoundMiddleware;