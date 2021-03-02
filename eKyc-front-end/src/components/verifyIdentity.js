import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

class VerifyIdentity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleNextClick =(event) =>{
            event.preventDefault();
            event.stopPropagation();
            console.log("Next clicked");
            this.props.history.push("/clientData");
    }
    render() {
        return (
            <Jumbotron>
                <h1>Identity verification </h1>
                <p>
                    This process may take few minutes. Once completed you will be able to add funds right away.
                </p>
                <p>
                    <Button variant="info" onClick={this.handleNextClick}>Next</Button>
                </p>
            </Jumbotron>
        );
    }
}

export default withRouter(VerifyIdentity);