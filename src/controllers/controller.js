exports.helloWorld = (req, res, next) => {
    res.send('<h1>Hello World!</h1>');
};

exports.getUsers = (req, res, next) => {
    res.json({
        msg: "this is json send",
    });
}

exports.getProduct = (req, res, next) => {
    res.json({
        id: 1,
        name: "product",
        price: 10000000,
    });
}
