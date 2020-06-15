export class FetchFacade {

    get(url: string, errorHandler: Function): Promise<any> {
        return fetch(url, {
            method: "GET"
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.status.toString())
                }
                return response.json()
            })
            .catch(error => errorHandler(error));
    }

    post(url: string, body: any, errorHandler: Function):Promise<any> {
        return fetch(url, {
            method: "POST",
            body
        })
            .then(response => response.json())
            .catch(error => errorHandler(error));
    }
}
