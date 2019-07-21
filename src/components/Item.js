import React, { Component } from 'react'
import PostItem from '../data/items.json'
import '../App.css'

export default class Item extends Component {
    render() {    
        return (
            <React.Fragment>               
                {PostItem.map((postItem, index)=>{
                   return <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                            <div className="card">
                                <img src={postItem.imgLocation} className="img-card-top" style={{height:"14rem"}} alt="item"></img>
                                <div className="card-body text-capitalize">
                                 <h5 className="body">{postItem.title}</h5>
                                 <p className="body">{postItem.receipt}</p>
                                </div>
                            </div>
                           </div>                
                })}
            </React.Fragment>
        )
    }
}
