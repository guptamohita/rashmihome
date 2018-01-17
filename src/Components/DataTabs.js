import Paper from 'react-md/lib/Papers';
import React, {Component} from 'react';

class DataTabs extends React.Component{
    render(){
        return(          
           <Paper>
                <div className='mh'>
                    <div className='selectdataset' onClick={(tabName) => tabToDisplay('selectDS')}>
                        <div className='tabnum'>
                            <div>1</div>
                        </div>
                        <div className='tablabel'>Select Dataset</div>
                    </div>
                                 
                    <div className='refinedataset' onClick={(tabName) => tabToDisplay('refineDS')}>
                        <div className='tabnum'>
                            <div>2</div>
                        </div>
                    <div className='tablabel'>Refine Dataset</div>
                    </div> 

                     <div className='addcompute' onClick={(tabName) => tabToDisplay('addCompute')}>
                        <div className='tabnum'>
                            <div>3</div>
                        </div>
                        <div className='tablabel'>Add Computations</div>
                    </div>

                    <div className='output' onClick={(tabName) => tabToDisplay('outAttribute')}>
                        <div className='tabnum'>
                            <div>4</div>
                        </div>
                       <div className='tablabel'>Output Attributes</div>
                    </div>

                    <div className='sum' onClick={(tabName) => tabToDisplay('summa')}>
                        <div className='tabnum'>
                            <div>5</div>
                        </div>
                       <div className='tablabel'>Summary</div>
                    </div>

                </div>
          
            </Paper>
        )
    }

}

export default DataTabs;