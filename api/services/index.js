/*
    @status:    params indicate TRUE/ FALSE
    @data  :    params data value will be sent
*/

export const services = (res, details, status = true) =>{

    // When no params are passed
    if(arguments.length === 0){
        return  res.status(500).send({
                    status: 'warning',
                    data: {
                        message: 'No Arguments found!'
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

    // Request Data is not valid
    if(typeof details === "string"){
        return res.status(400).send({
                    status: 'failed',
                    data: {
                        message: details
                    }
                })
    }

    // Error found during fetching data
    return res.status(500).send({
                status: 'error',
                data: {
                    message: details
                }
            })
}

export const isValidId = (targetId) => {
    // Regular Expression Patern
    const regexLiteral = /(?:([a-z0-9]){24})/;
    if(regexLiteral.test(targetId))
        return true;

    return false;
}