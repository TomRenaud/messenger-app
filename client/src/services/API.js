import { API_CONF } from "../config/api";

export const getMessages = async () => {
    const res = await fetch(API_CONF.messages, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    return res.json();
};