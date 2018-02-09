import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TimerList from './TimerList.js';
import AddSlotForm from './AddSlotForm.js';

class App extends React.Component {
  constructor() {
    super()
    this.hostUrl = "http://localhost:8000/"


    this.state = {jsonTable:
  					[{onTime:"21:53",length:60},
             {onTime:"07:50",length:120}],
  					mode:"OFF",
  					start:"14:38",
  					length:0,
  					removeIndex:-1,
  					command:""}

            this.getProps();

  }

  getProps = () => {
    axios.get(this.hostUrl + "update/")
      .then((resp) => {
        resp.data.hostUrl = this.hostUrl
          this.setState(resp.data);
      });
  }


	handleAdd = (parms) => {
		parms.command = "addtimerevent";
		console.log("form submit thuckmyballs: " + parms.start)
    axios.post(this.hostUrl + "update/", JSON.stringify(parms))
      .then((response) => {
        console.log(response);
        this.setState({jsonTable: response.data.jsonTable})
      })
	}

  handleRemove = (index) => {

    let parms = {removeIndex: index,
                  command: "removetimerevent"}
    console.log("index: " +parms.removeIndex + "command: " + parms.command);
    axios.post(this.hostUrl + "update/", JSON.stringify(parms))
      .then((response) => {

        this.setState({jsonTable: response.data.jsonTable})
      })
  }

  render() {
    return(
      <div>
        <AddSlotForm onSubmit={this.handleAdd}/>
        <TimerList data={this.state} handleRemove={this.handleRemove}/>
      </div>
    )
  }
}


export {App as default}
