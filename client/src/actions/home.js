import * as API from "../services/API";
import { actionTypes } from '../reducers/home';
import { randomDate } from "../utils";

export const postMessage = data => dispatch => {
    return dispatch({
      type: actionTypes.POST_MESSAGE,
      data
    });
}

export const getMessages = () => async dispatch => {
    dispatch({
        type: actionTypes.MESSAGES_PENDING,
        isPending: true
    });
    const messages = await API.getMessages();
    dispatch({
        type: actionTypes.MESSAGES_PENDING,
        isPending: false
    });
    return dispatch({
        type: actionTypes.GET_MESSAGES,
        messages: messages.map(({ id, email, body }) => {
          const randomPrivate = Math.random() < 0.5;
          return {
            key: id,
            author: randomPrivate ? "anonymous" : email,
            content: body,
            isPrivate: randomPrivate,
            date: randomDate(
              [2018, 2019, 2020],
              Array.from({ length: 12 }, (v, k) => k),
              Array.from({ length: 25 }, (v, k) => k + 1)
            )
          }
        }
        ).sort((a, b) => b.date - a.date)
    });
};