const express = require("express");
const {format: formatDate} = require('date-fns');

const app = express();


const port = parseInt(process.env.PORT || "3000");

app.use(
    express.json()
)



app.get('/current', (req, res) => {
    const current = new Date();

    const str = formatDate(current, "d of MMMM, YYYY, HH:mm.ss");

    res.json({
        str,
        current
    });
}); 


app.listen(port, () => {
    console.log("server started at port", port);
});