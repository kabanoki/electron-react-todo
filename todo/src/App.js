import React, { Component, useInsertionEffect } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class App extends Component {
  state = {
    list: [{id:0,value:"ToDoリストを書く"},],
  };

  constructor(prop) {
    super();

    this.todoRef = React.createRef();
  }

  insert(e) {
    let array = this.state.list;
    const id = this.state.list.length;
    const val = this.todoRef.current.value;
    
    array.push({id:id, value:val});
    this.setState({list:array});
  }

  render() {
    return <div className="App container">  
      <h1>チェックリスト</h1>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Input Todo" ref={this.todoRef} />
        <Button variant="success" onClick={this.insert.bind(this)}>追加する</Button>
      </InputGroup>
      <div className='p-3'>
        <ListGroup>
          {this.state.list.map(item => 
            <ListGroup.Item key={item.id}>{item.id} - {item.value}</ListGroup.Item>
          )}
        </ListGroup>
      </div>
    </div>
  }
}

export default App;
