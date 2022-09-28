const express = require('express');
const body_parser = require('body-parser');

const web = express();
web.set('view engine', 'ejs');
web.use(body_parser.json());

web.use('/', require('./routes/group_route'));
web.use('/19110501', require('./routes/student_route'));
web.use('/message', require('./routes/message_route'));

web.all('*', (request, response) => {
    console.log(`'${request.method}' | http://localhost:5000${request.url}`);
    response.render('404');
});

web.listen(5000, () => console.log(`Server is listening at 5000`));