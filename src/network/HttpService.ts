import Axios, { } from 'axios';
import URI from "urijs";
import IRequestPayload from '../Types/IRequestPayload';

const baseUrl = URI(process.env.REACT_APP_API_URL);

const axios = Axios.create({
    headers: {

    }
});

class HttpService {
    public static async get<T>(payload: IRequestPayload): Promise<T> {
        const url = URI(baseUrl).segment(payload.action);

        if (payload.segment)
            url.segment(payload.segment);

        if (payload.query)
            url.addSearch(payload.query);

        const { data } = await axios.get(url.toString());
        return data;
    }
}

export default HttpService;