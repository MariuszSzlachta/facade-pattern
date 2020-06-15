import { FetchFacade } from "./FetchFacade";
import { AxiosFacade } from "./AxiosFacade";
import { RestServiceImpl } from "./RestServiceImpl";
import RestService from "./RestService";
const url: string = "https://jsonplaceholder.typicode.com/todos";

const axiosService: RestService = new RestServiceImpl(new AxiosFacade());

const fetchService: RestService = new RestServiceImpl(new FetchFacade());

const foo = async () => {
    const data = await axiosService.get(url);
    console.log("data", data);
}
foo();

const bar = async () => {
    const data2 = await fetchService.get(url);
    console.log("data2", data2);
}
bar();
