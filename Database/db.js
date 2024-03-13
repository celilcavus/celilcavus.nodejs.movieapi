const sequelize = require('sequelize');
const seq = new sequelize('celil_','celil','YusufKral',{
    host:'91.151.90.223',
    dialect:'mariadb'
});

try {
    seq.authenticate();
    console.log("başarili");
} catch (error) {
    console.log("errorr == " + error);
}

module.exports = seq;