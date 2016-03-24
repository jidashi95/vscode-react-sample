import React from 'react';

import Todos from './Todos';
import NewTodo from './NewTodo';

class Viewport extends React.Component {

    constructor() {
        super();
        this.styles = {
            marginTop: 20,
            marginLeft: 20,
            width: '100%'
        };
    }

    render() {
        return (
            <div style={this.styles}>
                <NewTodo />
                <Todos />
            </div>
        );
     }
}

export default Viewport;
