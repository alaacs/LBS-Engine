'use strict';

const React = require('react');
const Ons = require('react-onsenui');

//custom imports
const map = require('./map.js');

/**
 * Component for displaying the picture view. On top a picture is displayed and below a map.
 * The map is generated in the same way, it is defined in the config file.
 */
class PictureView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgUrl: this.props.imgUrl
        }
        this.handlePictureChange = this.handlePictureChange.bind(this);
    }

    //handle a possible change of the picture
    handlePictureChange(value) {
        this.setState({imgUrl: value});
    }

    render() {
        var filepath = 'img/sampleImage.jpg';
        return (
            <div className="center" style={{height: '100%'}}>
                <Ons.Row style={{width: '100%', height: '50%'}}>
                    <img style={{display: 'block', width: '100%'}} src={filepath}/>
                </Ons.Row>
                <Ons.Row style={{width: '100%', height: '50%'}}>
                    <map.Map picture={true} logging={this.props.logging} externalData={this.props.externalData} gps={this.props.gps} layerControl={this.props.layerControl}
                            draggable={this.props.draggable}  zoomable={this.props.zoomable}/>
                </Ons.Row>
            </div>
        )
    }
}

module.exports = {
    PictureView: PictureView
}