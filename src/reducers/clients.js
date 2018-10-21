import UUID from 'uuid/v4';
import {
    CLIENTS_ADD_CLIENT,
    CLIENTS_UPDATE_EDITABLE_CLIENT,
    CLIENT_RESET_EDITABLE_CLIENT,
    CLIENT_SET_EDITABLE_CLIENT_BY_ID,
    CLIENT_EDIT_CLIENT,
} from "../actions/clients.js";
import {CLIENT_DELETE_BY_ID} from "../actions/clients";


const initialState = {
    list:[],
    editableClient: {
        id: null,
        email: '',
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CLIENTS_ADD_CLIENT: {
            return {
                ...state,
                list: [...state.list, {
                    ...action.payload,
                    id: UUID(),
                }],
            };
        }
        case CLIENTS_UPDATE_EDITABLE_CLIENT: {
            return {
                ...state,
                editableClient: {
                    ...state.editableClient,
                    ...action.payload,
                },
            };
        }
        case CLIENT_RESET_EDITABLE_CLIENT: {
            return {
                ...state,
                editableClient: {
                    ...initialState.editableClient,
                },
            };
        }
        case CLIENT_SET_EDITABLE_CLIENT_BY_ID: {
            const [client] = state.list.filter(client => client.id === action.payload);
            return {
                ...state,
                editableClient: {
                    ...client,
                },
            };
        }
        case CLIENT_EDIT_CLIENT: {
            return {
                ...state,
                list: state.list.map(client => client.id === action.payload.id ? {...client, ...action.payload} : {...client}),
            };
        }
        case CLIENT_DELETE_BY_ID: {
            return {
                ...state,
                list: state.list.filter(client => client.id !== action.payload)
            };
        }
        default: {
            return state;
        }
    }
};