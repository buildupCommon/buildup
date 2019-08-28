import '../webapp/css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
 
class MainPage extends React.Component {
 
    render() {
        return <div className="main">메인 페이지
            <Button color="danger">Danger!</Button>
        </div>;
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));