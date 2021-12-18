const Home = {
    index (request, response) {
        response.json({
            "name": "Lucas Fonseca",
            "email": "lucas@boxti.com.br",
        });
    }
}

export default Home;