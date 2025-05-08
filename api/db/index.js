const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shanno:chetu123@mongo-cluster.eqnomyj.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

const db = mongoose.connection;

db.once("open", function () {
    console.log("Connected successfully");
});


module.exports = db; 