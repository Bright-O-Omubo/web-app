const express = require("express");

const path = require("path");


const app = express();


const PORT = 3000;


app.use(
    express.static(
        path.join(__dirname, "public")
    )
);


app.listen(PORT, function() {

    console.log(
        `F1 Legends is running on port ${PORT}`
    );

});
