
export class Request {
    public static readonly baseUrl = '/api';

    public static get<T>(url: string) {
        return Request.doFetch<T>(url, 'GET');
    }

    public static post<T>(url: string) {
        return Request.doFetch<T>(url, 'POST');
    }

    public static put<T>(url: string) {
        return Request.doFetch<T>(url, 'PUT');
    }

    public static delete<T>(url: string) {
        return Request.doFetch<T>(url, 'DELETE');
    }

    private static doFetch<T>(url: string, method: string): Promise<T> {
        const fetchConfig: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return fetch(`${ Request.baseUrl }${ url }`, fetchConfig)
            .then((response) => response.ok ? (response.json()) : new Error(response.statusText))
            .catch((reason) => new Error(reason));
    }
}