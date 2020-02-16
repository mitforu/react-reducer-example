import {
ADD_TODO,
REMOVE_TODO,
TOGGLE_TODO,
SET_VISIBILITY_FILTER,
ADD_EMPLOYEE,
FETCH_EMPLOYEE_PENDING,
FETCH_EMPLOYEE_SUCCESS,
FETCH_EMPLOYEE_ERROR,
GET_ALL_EMPLOYEE,
FILTER_EMPLOYEE_BY
  } from './actionTypes'

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function addEmployee(employee) {
  return { type: ADD_EMPLOYEE, employee: employee }
}



export function fetchEmployeesPending() {
    return {
        type: FETCH_EMPLOYEE_PENDING
    }
}

export function fetchEmployeesSuccess(employees) {
    return {
        type: FETCH_EMPLOYEE_SUCCESS,
        employees: employees
    }
}

export function fetchEmployeesError(error) {
    return {
        type: FETCH_EMPLOYEE_ERROR,
        error: error
    }
}

export function getAllEmployees() {
    return {
        type: GET_ALL_EMPLOYEE
    }
}

export function setEmployeeFilter(filterText) {
    return {
        type: FILTER_EMPLOYEE_BY,
        filterEmployeeBy: filterText
    }
}