
// import
const express =require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

// Listener
app.listen(
    PORT,
    () => console.log(`Server ready at http://localhost:${PORT}`) 
);

// Endpoint GET
// app.get('/' , (req,res) => {
//     res.status(200).send({
//         product: "T-Shirt",
//         size: "L",
//         prize: 10.00,
//         hasLogo: false
//     })
// });

app.get('/' , (req,res) => {
    res.status(200).send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meine Seite</title>
</head>
<body>
    <h1>Cool</h1>
    <p>Das ist eine coole Sache!</p>
</body>
</html>`)
});

