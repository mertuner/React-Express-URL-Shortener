const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const redirectRoutes = require('./routes/redirect');
const handlingRoutes = require('./routes/hash')

const app = express();

app.use(cors())

app.use(bodyParser.json({ limit: '50mb' }));


app.use(redirectRoutes);

app.use(handlingRoutes)



app.listen(process.env.PORT || 5009, () => {
    console.log(`Server is up and running on PORT ${process.env.PORT || 5009}`);
});

