import React from "react"
import { Link } from "react-router-dom"
import Listing from "../../component/Listing/listing"

const HomePage = (props)=>{
    return (
    <div>
        <Link to='/add'>Go to Add Page</Link>
        <Listing></Listing>
    </div>
    )
}

export default HomePage