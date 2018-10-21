export const CLIENTS_ADD_CLIENT = 'CLIENTS_ADD_CLIENT';
export const CLIENTS_UPDATE_EDITABLE_CLIENT = 'CLIENTS_UPDATE_EDITABLE_CLIENT';
export const CLIENT_RESET_EDITABLE_CLIENT = 'CLIENT_RESET_EDITABLE_CLIENT';
export const CLIENT_SET_EDITABLE_CLIENT_BY_ID = 'CLIENT_SET_EDITABLE_CLIENT_BY_ID';
export const CLIENT_EDIT_CLIENT = 'CLIENT_EDIT_CLIENT';
export const CLIENT_DELETE_BY_ID = 'CLIENT_DELETE_BY_ID';

export const addClient = (payload) => ({
        type: CLIENTS_ADD_CLIENT,
        payload,
    });

export const updateEditableClient = payload => ({
    type: CLIENTS_UPDATE_EDITABLE_CLIENT,
    payload,
});
export const resetEditableClient = payload => ({
    type: CLIENT_RESET_EDITABLE_CLIENT,
    payload,
});
export const setEditableClientById = payload => ({
    type: CLIENT_SET_EDITABLE_CLIENT_BY_ID,
    payload,
});
export const editClient = payload => ({
    type: CLIENT_EDIT_CLIENT,
    payload,
});
export const deleteClientById = payload => ({
    type: CLIENT_DELETE_BY_ID,
    payload,
})