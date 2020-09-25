import React, { Component } from 'react';
import ThumbBox from './ThumbBox'


class Thumbnail extends Component {

    render() {
        
        return (
            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        <ThumbBox name='thumbnail1' color='blue'/>
                        <ThumbBox name='thumbnail2' color='green'/>
                        <ThumbBox name='thumbnail3' color='red'/>
                        <ThumbBox name='thumbnail4' color='yellow'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Thumbnail;