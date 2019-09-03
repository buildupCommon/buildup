import '../webapp/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';


import BupHeader from './templates/BupHeader';

class MainPage extends React.Component {

    render() {
        return <div>
            <BupHeader></BupHeader>
        </div>;
    }

}


ReactDOM.render(<MainPage />, document.getElementById('root'));