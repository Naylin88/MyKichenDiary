import React, { Component } from 'react'
import Item from './Item';
import Search from './Search.js'
import '../App.css'

export default class ItemList extends Component {
    render() {
        return (
            <React.Fragment>
                
                    {/* title */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="head">My Kitchen Diary</h1>
                           <Search />
                        </div>                                  
                    </div>
                    <div className="container my-1">                                                                         
                    {/* End of Title */}
                    <div className="row">
                   <Item />                    
                    </div>

                </div>            
            </React.Fragment>
        )
    }
}