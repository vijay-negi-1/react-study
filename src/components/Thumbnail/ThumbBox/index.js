import React, {Component} from 'react';

class ThumbBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: true
        }
    }
    clickAlert = (prop)=>{
        alert(this.props.color)
    }
    clickCheckState=()=>{
        this.setState({
            value : !this.state.value
        }
        )
    }
    render() {
        
        const thumbStyle = {
            height: '225px',
            width: '100%', 
            display: 'block',
            backgroundColor: 'red'
        };
         

        return (
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
        <div className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{backgroundColor: this.props.color},thumbStyle}> <p>{this.props.name}</p></div>
                    <div className="card-body">
                        <p className="card-text" style={{color:this.props.color}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.clickAlert}>View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary" style={this.state.value==true?{backgroundColor:'black'}:{backgroundColor:'blue'}} onClick={this.clickCheckState}>Edit</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThumbBox;



