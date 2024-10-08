import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar.jsx';
import StudentsList from './components/StudentsList.jsx';
import StudentModal from './components/StudentModal.jsx';

import { Container } from 'react-bootstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <AppNavbar />

                    <Container>
                        <StudentModal />
                        <StudentsList />
                    </Container>
                </div>
            </Provider>
        );
    }
}

export default App;
