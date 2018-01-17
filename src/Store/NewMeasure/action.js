export const CREATE_MEASURE = 'CREATE_MEASURE';

export default function createMeasure(measureData) {
    alert(1);
    return {
        type : CREATE_MEASURE,
         measureData
    }
}