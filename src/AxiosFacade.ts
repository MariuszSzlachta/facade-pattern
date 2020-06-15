import axios from "axios";

export class AxiosFacade {
    private readonly _axiosInstance = axios.create();

    get(url: string, errorHandler: Function){
        return this._axiosInstance.get(url)
            .then((res) => res.data)
            .catch(error => errorHandler(error));
    }

    post(url: string, body: object, errorHandler: Function) {
        return this._axiosInstance.post(url, body)
            .then(res => res.data)
            .catch(error => errorHandler(error));
    }
}
