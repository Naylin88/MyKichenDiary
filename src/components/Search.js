import React, { Component } from 'react'

export default class Search extends Component {

    render() {
        
        return (
            <React.Fragment>
                <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search Food" />
                                <span className="input-group-btn">
                                <button className="input-group-text bg-primary text-white" type="button">Submit</button>
                             </span>
                           </div>     
            </React.Fragment>
        )
    }
}
