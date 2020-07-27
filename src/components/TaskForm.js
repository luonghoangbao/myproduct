import React, {Component} from 'react';

class TaskForm extends Component {
        constructor(props) {
          super(props);
          this.state = {
            name: ' ',
            status: false
          }
        }
        handleChange = (event) => {
          var target = event.target;
          var name = event.name;
          var value = event.value;
          this.setState({
            [name] : value
          })
        }
        onSubmit = (event) =>{
          event.preventDefault();
          console.log(this.state);
        }
        //đóng form
        onCloseForm = () => {
          this.props.onCloseForm();
        }
        render(){
        return (
        <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Thêm công việc
            <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.value}
                onChange={this.handleChange}
                />
            </div>
            <label>Trạng thái :</label>
            <select 
                className="form-control" 
                name="status"
                value={this.state.value}
                onChange={this.handleChange} 
                >
                <option value={true}>Kích hoạt</option>
                <option value={false}>Ẩn</option>
            </select><br/>
            <div className="text-center">
                <button type="submit" className="btn btn-warning">
                    <span className = "fa fa-plus mr-5"></span>Lưu lại
                </button>
                &nbsp;
                <button type="submit" className="btn btn-warning">
                    <span className = "fa fa-close mr-5"></span>Hủy bỏ
                </button>
            </div>
          </form>
        </div>
      </div>
  );
        }
}

export default TaskForm;
