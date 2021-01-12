// Import thu vien
import React from 'react';
import ReactDom from 'react-dom';

// Cac steps:
// 1. Create app component: Truoc 2015: const App = function() {}
// 2. Hiển thị thử abc trên react

//const App = () => {
//    //return JSS, na na html
//  return(
//  <div>
//  abc
//  </div>
//  );
//};
// ReactDom.render(<App />, document.querySelector('#root'));

// 3. Render phan hien thi


// 1+2.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Năm sinh của bạn nam:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Năm sinh của bạn nữ:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// 3.
ReactDom.render(<App />, document.querySelector('#root'));


// Next Step
// 1. gửi dữ liệu về flask server: import Axios from 'axios';
// 2. nhận được dữ liệu thì hiển thị như thế nào: tạo component để hiển thị kết quả
// 3. chia client, folder server ->
// app = Flask(__name__,
//             instance_relative_config=True,
//             static_folder="../../client/static",
//             template_folder="../../client/template")