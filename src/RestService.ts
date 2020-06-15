export default interface RestService {
    get(url: string): any;

    post(url: string, body: any): any;
}
