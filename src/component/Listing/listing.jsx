import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {deleteItems} from "../../redux/list/list.action"
import React from "react"

class Listing extends React.Component{
   render(){
    const {listingData} = this.props ;
    return (<div> 
        <table>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th> Actions</th>
            </tr>
            {
                listingData.map((data,index)=>{
                    return (<tr key={index}>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td><Link to= {`/edit/${index}?username=${data.username}&email=${data.email}`}><span>Edit</span></Link>/ <span onClick={()=>this.props.deleteItem(index)}>Delete</span></td>
                    </tr>)
                })
            }
        </table>
    </div>)
   }
}

const mapDispatchToProps = dispatch => ({
    deleteItem : index =>  dispatch(deleteItems(index)) 
})

const mapStateToProps = (state)=>{
    return ({listingData : state.list.listingData})
}

export default connect(mapStateToProps,mapDispatchToProps)(Listing) ;
