/*
    @status:    params indicate TRUE/ FALSE
    @data  :    params data value will be sent
*/

module.exports = (res, details, status = true) =>{

    // When no params are passed
    if(arguments.length === 0){
        return  res.status(500).send({
                    status: 'warning',
                    data: {
                        message: 'No data found!'
                    }
                })
    }

    // Data is successfully passed
    if(status) {
        return  res.status(201).send({
                    status: 'success',
                    data: details
                });
    }

    // Error found during fetching data
    return res.status(500).send({
                status: 'error',
                data: details
            })
}