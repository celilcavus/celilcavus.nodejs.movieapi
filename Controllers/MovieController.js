const data = require('../Models/Movie');


exports.get = (req, res) => {
    data.findAll().then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
}

exports.getById = (req, res) => {
    const id = req.params.id;
    data.findByPk(id).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
}

exports.post = (req, res) => {
    var values = req.body;
    data.create(values);
    res.json(1);
}


exports.delete = (req, res) => {
    const id = req.params.id;
    data.destroy({ where: { id: id } });
    res.json(1);
}

exports.put = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    data.update(body, { where: { id: id } });
    res.json(1);
}