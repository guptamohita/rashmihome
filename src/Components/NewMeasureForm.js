import Paper from 'react-md/lib/Papers';
import React, {Component, PropTypes} from 'react';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';
import '../Components/NewMeasureForm.css';

class NewMeasureForm extends React.Component{
    render(){
        return(
            <div className="mainpage">
                <paper>
                      <form>
                           <div className='createmeasure'>
                               <div className='label'>Create New Measure</div>
                            </div>
                            <div className="measuredetail">
                                <div className="detail">
                                    Measure Details
                                </div>
                                
                                    <TextField
                                           placeholder="Enter Measure Name"
                                           lineDirection="right"
                                           className="md-cell md-cell--bottom"
                                           onChange={value => this.props.onChangeHandle('measureName', value)}
                                     />

                                     <TextField
                                           placeholder="Enter Description"                                          
                                           className="md-cell md-cell--bottom"
                                            onChange={value => this.props.onChangeHandle('measureDesc', value)}
                                      />

                                      <Button raised label="Create Measure" onClick={this.props.onBtnClick}/>
                                
                                
                            </div>
                      </form>
                </paper>
            </div>
        )
    }
}

export default NewMeasureForm;