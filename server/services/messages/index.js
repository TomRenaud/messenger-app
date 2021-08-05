import rp from "request-promise";
import util from "util";
import { API_CONF, HOST_API } from "../../conf";

export const getMessages = async () => {
	const options = {
		method: "GET",
		uri: util.format(API_CONF.messages, HOST_API),
		json: true /// Automatically stringifies the body to JSON
	};
	return rp(options);
};