import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchEmployeesPending, fetchEmployeesSuccess, fetchEmployeesError, addEmployee, setEmployeeFilter} from './actionCreator';
import {getEmployeeError, getEmployee, getEmployeePending} from './reducers';
import {EmployeeTable} from './EmployeeTable'
import store from './Store'
import fetchEmployeesAction from './fetchEmployees'

class Employee extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchEmployee()
        store.subscribe(() => console.log('this is from subscribe method', store.getState()))
    }

    render() {
        const {employees} = this.props;
        return (
            <div>
                <EmployeeTable employees = {employees}
                 addEmployee = {this.props.addEmployee}
                 setEmployeeFilter = {this.props.setEmployeeFilter}
                 />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: getEmployeeError(state),
    employees: getEmployee(state),
    pending: getEmployeePending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchEmployee: fetchEmployeesAction,
    addEmployee: addEmployee,
    setEmployeeFilter: setEmployeeFilter
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Employee);
