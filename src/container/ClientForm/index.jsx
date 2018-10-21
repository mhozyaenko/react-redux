import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as clientsActions from '../../actions/clients.js';
import './styles.scss';
import '../../components/Button';
import Button from "../../components/Button";


class ClientForm extends React.PureComponent {
    static propTypes = {
        addClient: PropTypes.func.isRequired,
        updateEditableClient: PropTypes.func.isRequired,
        resetEditableClient: PropTypes.func.isRequired,
        editClient: PropTypes.func.isRequired,
        editableClient: PropTypes.shape({
            id: PropTypes.string,
            email: PropTypes.string.isRequired
        })
    };
    handleChange = ({target: {name, value}}) => {
        const{updateEditableClient} = this.props;
        updateEditableClient ({
            [name]: value,
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        const {editableClient, addClient, resetEditableClient, editClient} = this.props;
        if (editableClient.id===null) {
            addClient(editableClient)
        } else {
            editClient(editableClient)
        }
        resetEditableClient();
    };

    render() {
        const {
            editableClient: {email},
        } = this.props;
        return (
            <form action="/" className="ClientForm" onSubmit={this.handleSubmit} >
                <fieldset>
                    <input id="clientEmail" type="email" name="email" placeholder="email" onChange={this.handleChange} value={email}/>
                    <Button type="submit">Submit</Button>
                </fieldset>
            </form>
            );

    }
}
const mapStateToProps = state => ({
 editableClient: state.clients.editableClient,
});


export default connect(
    mapStateToProps,
    clientsActions
)(ClientForm);