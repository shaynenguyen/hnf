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

    // Request Data is not valid
    if(typeof details === "string"){
        return res.status(400).send({
                    status: 'failure' ,
                    data: {
                        message: details
                    }
                })
    }
    // if(typeof details === "string"){
    //     return res.status(status? 201 : 400).send({
    //                 status: status? 'success' : 'failure' ,
    //                 data: {
    //                     message: details
    //                 }
    //             })
    // }

    if(details.code && details.code === 11000) {
        // Handle error code from MongoDB
        return res.status(500).send({
            status: 'failed',
            data: {
                message: 'Duplicate username'
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

export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if( user && user.accessToken) {

        // for Node.js Express back-end
        return { 'x-access-token': user.accessToken };

        // Others
        // return { Authorization: 'Bearer ' + user.accessToken }
    } else {
        return {};
    }
}