import '../webapp/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';


import TopNavVar from './components/TopNavVar';

class MainPage extends React.Component {

    render() {
        return <div>
            <TopNavVar></TopNavVar>
        </div>;
    }

}


ReactDOM.render(<MainPage />, document.getElementById('root'));