import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js'
import { className } from "postcss-selector-parser";
class App extends Component {
  constructor(props){
    super(props);
    this.state={items:[],id:[],text:''};
  }
  change=(event)=>{
    this.setState({text:event.target.value})
  }
  componentDidMount(){
    const itemsRef=firebase.database().ref('items');
    itemsRef.on('value',(snapshot)=>{
      let items=snapshot.val();
      let newState=[];
      let newState2=[];
      for(let item in items){
        newState.push(items[item]);
        newState2.push(item);
      }

      this.setState({items:newState,id:newState2});
      
    })


  }
  add=()=>{
    const itemsRef=firebase.database().ref('items');
    itemsRef.push(this.state.text)
    this.setState({text:''})
  }
  remove=(index)=>{
    console.log(index)
    const itemsRef=firebase.database().ref(`items/${index}`);
    console.log(itemsRef)
    itemsRef.remove()
  }
  render(){
    return(
      <div>
        <div>
          <input type='text' placeholder='Enter' value={this.state.text} onChange={this.change} />
          <button onClick={this.add} >Submit</button>
        </div>
        <div>
          {this.state.items.map((item,index)=>{
            return (<li>{item}<button onClick={()=>this.remove(this.state.id[index])}>Delete</button></li>)
          })}
        </div>
      </div>
    )
  }
}

export default App;