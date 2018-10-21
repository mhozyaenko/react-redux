import React from 'react';
import './styles.scss';
import ClientForm from '../ClientForm';
import ClientsList from '../ClientsList';

const App = () => (
    <div className="App">
        <h1>Welcome</h1>
        <ClientForm></ClientForm>
        <ClientsList/>
    </div>
);

export default App;