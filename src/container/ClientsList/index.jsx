import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as clientsActions from '../../actions/clients.js';
import './styles.scss';
import Button from "../../components/Button";

class ClientsList extends React.PureComponent {
    static propTypes = {
        setEditableClientById: PropTypes.func.isRequired,
        deleteClientById: PropTypes.func.isRequired,
        clientsList: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        })).isRequired,
    };
    handleEdit = ({target}) => {
        const {setEditableClientById} = this.props;
        setEditableClientById(target.dataset.id);
    };
    handleDelete = ({target}) => {
        const {deleteClientById} = this.props;
        deleteClientById(target.dataset.id);
    }
    render() {
        const {clientsList} = this.props;
        return (
        <ul className="ClientsList">
            {clientsList.map(({id, email}) => (
                <li className="ClientsList-item" key={id}>
                    <strong>{email}</strong>
                    <div>
                    <Button className="ClientsList-item-button" data-id={id} onClick={this.handleEdit}>Edit</Button>
                    <Button className="ClientsList-item-button" data-id={id} onClick={this.handleDelete}>Delete</Button>
                    </div>
                </li>
            ))}
        </ul>
        );
    }
}

const mapStateToProps = state => ({
    clientsList: state.clients.list,
});

export default connect(mapStateToProps, clientsActions)(ClientsList);