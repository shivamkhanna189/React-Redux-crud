
import React from "react" ;

import {withRouter} from "react-router-dom"
import Qs from "qs";
import "./edititem.css"
import {connect} from "react-redux" ;
import {updateItems} from "../../redux/list/list.action"

class EditItem extends React.Component{

    constructor(){
        super();
        this.state ={
            username :'afasdf ',
            email :'abc@gmail.com'
        }
    }

    handleChange = (event)=>{
        const {name,value}= event.target;
        this.setState({[name] : value})
    }

    handleSubmit = (event)=>{
        let id = this.props.match.params.id
        event.preventDefault();
        this.props.editItem( id, this.state)
        this.props.history.push('/home')
    }

    componentDidMount(){
      var z =  Qs.parse(this.props.location.search,{ ignoreQueryPrefix: true })
       this.setState({username :z.username, email : z.email})
    }

    render(){
        return (
        <div className="edit-box"> 
            <h2>Edit Item</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="user-box">
                    <input type="text" name="username" value={this.state.username} onChange = {this.handleChange}></input>
                    <label >Username</label>
                </div>

                <div  className="user-box">
                     <input type="text" name="email" value={this.state.email} onChange = {this.handleChange}></input>
                     <label >Email</label>
                </div>
                
                
                <button >Update Item</button>
            </form>
        </div>)
    }
}

const mapDispatchToProps = dispatch =>({
    editItem : (index, data)=>dispatch(updateItems(index,data))
})

export default connect(null,mapDispatchToProps)(withRouter(EditItem)) ;