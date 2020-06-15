import RestService from "./RestService";

export class RestServiceImpl implements RestService {
    private readonly _serviceProvider: any;

    constructor(private readonly serviceProvider: any) {
        this._serviceProvider = serviceProvider;
    }

    get(url: string): Promise<any> {
        return this._serviceProvider.get(url, this.handleError);
    }

    post(url: string, body: object): Promise<any> {
        return this._serviceProvider.post(url, body)
    }

    handleError(error: string): void {
        console.error("ERROR: ", error);
        // we can log error here and inform user about it using toast or sth like that.
    }
}
