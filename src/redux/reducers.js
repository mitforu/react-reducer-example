import {
VisibilityFilters,
SET_VISIBILITY_FILTER,
TOGGLE_TODO,
ADD_TODO,
ADD_EMPLOYEE,
FETCH_EMPLOYEE_PENDING,
FETCH_EMPLOYEE_SUCCESS,
FETCH_EMPLOYEE_ERROR,
GET_ALL_EMPLOYEE,
FILTER_EMPLOYEE_BY
} from './actionTypes';

import { combineReducers } from 'redux';

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const initialEmployeeState = {
    pending: false,
    employees: [],
    error: null,
    filterEmployeeBy: ''
}

function employee(state = initialEmployeeState, action){
    switch(action.type){
        case ADD_EMPLOYEE:
            return {
            ...state,
             employees: state.employees.concat(action.employee)
            }
         case FETCH_EMPLOYEE_PENDING:
                    return {
                        ...state,
                        pending: true
                    }
        case FETCH_EMPLOYEE_SUCCESS:
            return {
                ...state,
                pending: false,
                employees: action.employees
            }
        case FETCH_EMPLOYEE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
         case GET_ALL_EMPLOYEE:
                     return {
                         ...state,
                     }

         case FILTER_EMPLOYEE_BY:
              return {
                          ...state,
                          filterEmployeeBy: action.filterEmployeeBy
                     }
        default:
            return state;
    }
}

export const getEmployee = state => {

    const employees = state.employee.employees;
    const filter = state.employee.filterEmployeeBy

    if(filter != ""){
        debugger
        return employees.filter(employee => employee.employee_name.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
    }else{
        return employees;
    }

};

export const getEmployeePending = state => {
    return state.employee.pending
};

export const getEmployeeError = state => state.employee.error;

const employeeReducerApp = combineReducers({
  visibilityFilter,
  todos,
  employee
});

export default employeeReducerApp



