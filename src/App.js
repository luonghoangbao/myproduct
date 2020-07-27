import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/control';
import TaskList from './components/TaskList';
class App extends Component { // quản lý state
  constructor(props){
    super(props);
    this.state = {
      task: [], // id,unique,name,status
      isDisplayform: false
    }
  }
  //Lưu trữ dữ liệu trên website
  componentWillMount(){ //hàm sẽ được gọi khi component được gán vào( được refresh lại) 
    if(localStorage && localStorage.getItem('tasks')){ // nếu localStorage khác null và nó láy được item
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks
      })
    }
  }
  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: 'Học lập trình',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Đi massage',
        status: false
      },
      {
        id: this.generateID(),
        name: 'Đi đá banh',
        status: true
      }
    ]
    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks)); // localStorage là HTML5 được gọi ở Javascript
  }
    s4(){ // hàm random ra chuỗi
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    generateID(){
      return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
    }

    onDisplay = () => {
      this.setState({
        isDisplayform: !this.state.isDisplayform
      })
    }
    onCloseForm = () => {
      this.setState({
        isDisplayform: false
      })
    }
  render(){
    var { tasks, isDisplayform } = this.state;
    var elmTaskForm = isDisplayform ? <TaskForm onCloseForm={this.onCloseForm}/> : '';
  return (
    <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1><hr/>
        </div>
        <div className="row">
          <div className = {isDisplayform? "col-xs-4 col-sm-4 col-md-4 col-lg-4": ''}>
            {/*Form*/}
              {elmTaskForm}
          </div>
          <div className = {isDisplayform ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
              <button type="button" className="btn btn-primary" onClick={this.onDisplay}>
                  <span className="fa fa-plus mr-5" ></span>Thêm công việc
              </button>
              <button type="button" className="btn btn-danger ml-5" onClick={this.onGenerateData}>
                    Generate data
              </button>
              <hr/>
              {/* Search - Sort */}
              <Control />
              <div className="row mt-15"><br/>          
              <TaskList tasks={tasks}/>
          </div>
        </div>
          </div>
          {/* List */}
    </div>
  );
  }
}

export default App;
