
import React from "react" ;
import { Link, withRouter } from 'react-router-dom';
import "./addItem.css" ;
import addItems from "../../redux//list/list.action"
import {connect} from "react-redux"

class AddItem extends React.Component{

    constructor(){
        super();
        this.state =  {
            username :'',
            email :''
        }
    }

    handleChange = (event)=>{
        const {name,value}= event.target;
        this.setState({[name] : value})
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.addItem(this.state);
        this.setState({username :'', email :""})
        this.props.history.push('/home')
    }

    render(){
        return (
        <div className="add-box">
            <h2>Add Item</h2>
            <form onSubmit = {this.handleSubmit}>
                <div className="user-box">
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <label>Username</label>
                </div>
                <div className="user-box">
                     <input type="text" name="email" value={this.state.email}  onChange={this.handleChange}/>
                     <label>Email</label>
                </div>
             <button>Add</button>
            </form>
            <Link to="/home">Back to Listing</Link>
        </div>)
    }
}

const mapDispatchToProps = dispatch =>({
    addItem : data =>dispatch(addItems(data))
})


export default connect(null,mapDispatchToProps)(withRouter(AddItem))