import {fetchEmployeesPending, fetchEmployeesSuccess, fetchEmployeesError} from './actionCreator';

export default function fetchEmployees() {
    return dispatch => {
        dispatch(fetchEmployeesPending());
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchEmployeesSuccess(res.data));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchEmployeesError(error));
        })
    }
}