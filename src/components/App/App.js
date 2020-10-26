import React from 'react';
import './App.scss';
import store from 'redux/store'
import {Provider} from "react-redux";
import CardList from 'components/CardList/CardList';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CardList />
            </div>
        </Provider>
    );
}

export default App;
