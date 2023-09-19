export const Api = (route) => {

    let _method = 'get';
    let _headers = {};
    let _callback = ()=>1;
    let _getParams = '';
    let _postJson = null;

    let makeObject = () => {
        return Object.freeze({
            get,
            post,
            callback,
            headers,
            send,
            url
        });
    };


    let get = (params) => {
        _method = 'get';
        if(params !== undefined) {
            let temp = [];
            for(let i in params) {
                temp.push(`${i}=${params[i]}`);
            }
            _getParams = `?${temp.join('&')}`;
        }
        return makeObject();
    };

    let post = (obj) => {  
        _method = 'post';
        _postJson = JSON.stringify(obj);
        _headers['Content-Type'] = 'application/json';
        return makeObject();
    };

    let callback = (fn) => {
        _callback = fn;
        return makeObject();
    };

    let url = () => route+_getParams;

    let send = async () => {
        let fetchParams = {
            method: _method,
            headers: _headers
        };
        if(_method === 'post') {
            fetchParams.body = _postJson;
        }
        try {
            let promise = await fetch(url(), fetchParams);
            let response = undefined;
            response = await promise.json();
            _callback({ok: promise.ok, status: promise.status, data: response});
        }
        catch (err) {
            _callback({ok: false, status: undefined, data: undefined, error: err})
            console.log(err, route);
        }
    };

    let headers = (obj) => {
        for(let i in obj) {
            _headers[i] = obj[i];
        }
        return makeObject();
    };

    return makeObject();
};