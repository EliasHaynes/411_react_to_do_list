import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      text: '',
      todos: []
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      ...this.state,
      text: event.target.value
    })
    console.log('right here dad:', this.state.text)
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      todos: [...this.state.todos, this.state.text],
    })
    this.setState({
      text: ''
    })
  }
  
  
  onClickHandler = () => {
    console.log('click incoming')
    let arrLastElement = this.state.todos.length-1
    //We are using a ternary operator here to change the state of isClicked to true if currently false and false if currently true
    this.state.isClicked ? this.setState({
      ...this.state,
      isClicked: false
    }) : this.setState({
      ...this.state,
      text: this.state.todos[arrLastElement],
      isClicked: true
    })

    console.log('click happned:', this.state.isClicked)
    console.log('text set:', this.state.text)
    console.log('todo arr:', this.state.todos)
  };

  deleteTodo = (index) => {
  //How this works:
    //Step1: Create the deleteTodo method
    //Step2: Create the delete button to spawn in with the todo
    //Step3: Add the delete method as an event listener(attribute) of the todo element
    //Step4: 
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo,idx) => idx !== index )
    })
  }

  editTodo = () => {

  }
  

  render() {
      return (
        <div>
          {/* We add the Method onto the button with prop(attribute) onClick */}
          <button onClick={this.onClickHandler}>Click Me</button>
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.text} onChange={this.onChangeHandler}></input>
            <button type='submit'>Submit</button>
          </form>

            {this.state.todos.map((todo,index) => {
              return (       
                <p key={index}> 
                    {todo} 
                    <button onClick={() => this.deleteTodo(index)}>Delete</button>
                </p>
                
              )
            }
            )}
          
        </div>
      )
  }
}

export default App;
