import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import DataTabs from '../Components/DataTabs';

class MeasureDetailsPage extends React.Component {
    render()
    {
        //  const { measureName, history } = this.props;
        return(
            <div className='measure-entered'>{`Enter details for ${this.props.measureName}`}</div>
        )
    }
}



function mapStateToProps(state) {
    if(state.createMeasure.measureData !== undefined) {
        return {
        measureName: state.createMeasure.measureData.measureName
        };
    } 
}

export default connect(mapStateToProps)(MeasureDetailsPage);