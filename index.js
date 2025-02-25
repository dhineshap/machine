const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json()); // Enable JSON parsing

app.use("/", router);

router.get("/", async (req, res) => {
    try {
        let params = req.query
        console.log("Params", params)

        res.status(200).send({
            message: "Success",
            ...params
        });
    } catch (error) {
        res.status(500).json({
            error: "Something went wrong",
            message: error?.message
        });
    }
});

app.listen(3000, '0.0.0.0', () => {
    console.log("App running on port 3000");
});
