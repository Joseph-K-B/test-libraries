
module.exports = rawRequest => {
    const parseRequest = rawRequest.split('\n');
    const [method] = parseRequest[1].split(' ')
    console.log(method)
    return { method };
}

