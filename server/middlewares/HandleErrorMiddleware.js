const HandleErrorMidleware = (error, request, response, next) => {
	if (error.status !== 404) {
		console.log(error.stack);
	}
	response.status(error.status || 500)
		.json({ 
			error: {
				status: error.status || 500,
				message: error.message || 'Internal Server Error'
			}
		});
	next();
};

export default HandleErrorMidleware;