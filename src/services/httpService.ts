import { error } from 'console';

type HTTP_METHODS = 'GET' | 'POST' | 'PUT' | 'DELETE';

const generateRequestOptions = (
    method: HTTP_METHODS,
    body: unknown,
): RequestInit => {
    if (method === 'GET') {
        return {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };
    }

    return {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
};

/**
 * Utility service for making  http requests
 * @param url request url
 * @param method HTTP Method
 * @param body Request body
 * @returns Promise<T>
 */
const makeHTTPRequest = async <T>(
    url: string,
    method: HTTP_METHODS,
    body: unknown = {},
): Promise<T> => {
    try {
        const response = await fetch(url, generateRequestOptions(method, body));
        const responseData = await response.json();
        return responseData as Promise<T>;
    } catch (error) {
        throw new Error(`An Error occured ${error}`);
    }
};

// use of generic type param for funcs
function logData<T>(name: T): Array<T> {
    return [name];
}

logData<string>('dee');

export default makeHTTPRequest;
