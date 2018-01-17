import React, {Component, PropTypes} from 'react';
import NewMeasureForm from '../Components/NewMeasureForm';
import { connect } from 'react-redux';
import createMeasure from '../Store/NewMeasure/action';

class NewMeasurePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onChangeHandle(fieldName, fieldValue) {
        this.setState({[fieldName]: fieldValue})
    }

    onCreateMeasureBtnClick(e) {
        const {dispatch, history} = this.props;
        const measureData = this.state;
        this.props.dispatch(createMeasure(measureData));
        history.push('/measureDetails');
    }


    render()
    {
        return (
            <div>
              <NewMeasureForm
               onBtnClick={e => this.onCreateMeasureBtnClick(e)} 
               onChangeHandle={(fieldName, fieldValue) => this.onChangeHandle(fieldName, fieldValue)}/>
            </div>  
        )
    }
}

NewMeasurePage.propType = {
   // dispatch:PropTypes.function
}

export default connect()(NewMeasurePage);