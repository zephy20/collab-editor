import React, {
  Component
} from 'react';
import fire from './fire'
//import Message from './Message'
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';


var database = fire.database();

class CollabEditor extends Component {

constructor(props)
{
  super(props);
  this.state = 
  {
    newMessage: ""
  }
}
componentDidMount() {
  database.ref('/collab/code').on('value', snapshot => {
    const messages = snapshot.val() || {};
    console.log({messages});
    this.setState({newMessage: messages})
  })
}

addMessage(new1) {
  database.ref('/collab/code').set({
    message:this.state.newMessage
  })
  this.setState({
    newMessage: new1
  });
}




  render() {
    return ( <div>
      <AceEditor
  mode="javascript"
  theme="monokai"
  name="blah2"
  onLoad={this.onLoad}
  onChange={(new1) => {this.addMessage(new1)}}
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={this.state.newMessage}
  setOptions={{
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
  }}/>

        
          
      </div>
        
    )
  }
}


export default CollabEditor;
