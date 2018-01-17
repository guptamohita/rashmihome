import { combineReducers } from 'redux';
import  createMeasure  from './NewMeasure/reducer';
import selectedDataset from './NewMeasure/reducer';


const rootReducer = combineReducers({
    createMeasure: createMeasure,
    selectedDataset: selectedDataset
});

export default rootReducer;