import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TimerList from './TimerList.js';
import AddSlotForm from './AddSlotForm.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.hostUrl = "http://localhost:8000/"
    this.setState({hostUrl: this.hostUrl})

    this.state = {jsonTable:
  					[{onTime:"21:53",length:60},
             {onTime:"07:50",length:120}],
  					mode:"OFF",
  					start:"14:38",
  					length:0,
  					removeIndex:-1,
  					command:""}

    axios.get(this.hostUrl + "update/")
      .then((resp) => {
          this.setState(resp.data);
      });
  }




	handleAdd(parms){
		parms.command = "addtimerevent";
		console.log("form submit thuckmyballs: " + parms.start)
	}

  render() {
    return(
      <div>
        <AddSlotForm onSubmit={this.handleAdd}/>
        <TimerList data={this.state}/>
      </div>
    )
  }
}


export {App as default}
