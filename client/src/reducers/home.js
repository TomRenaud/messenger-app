export const actionTypes = {
    MESSAGES_PENDING: "MESSAGES_PENDING",
    GET_MESSAGES: "GET_MESSAGES",
    POST_MESSAGE: "POST_MESSAGE"
};

export const messagesPending = (
  state = false,
  action
) => {
    switch (action.type) {
        case actionTypes.MESSAGES_PENDING:
            return action.isPending;
        default:
            return state;
    }
};

export const messages = (
  state = [],
  action
) => {
    switch (action.type) {
        case actionTypes.GET_MESSAGES:
            return action.messages;
        case actionTypes.POST_MESSAGE:
            return [
              ...state,
              {
                key: Date.now(),
                author: action.data.isPrivate ? "anonymous" : "john.doe@test.fr",
                content: action.data.message,
                isPrivate: action.data.isPrivate,
                date: new Date()
              }
            ].sort((a, b) => b.date - a.date);
        default:
            return state;
    }
};