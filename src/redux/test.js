import { ADD_TODO, REMOVE_TODO, VisibilityFilters} from './actionTypes'
import { applyMiddleware,createStore, } from 'redux'
import todoApp from './reducers'
import fetchEmployees from './fetchEmployees'
import {addTodo, toggleTodo, setVisibilityFilter, addEmployee, fetchEmployeesSuccess} from './actionCreator'
import thunk from 'redux-thunk';

const middlewares = [thunk];

const store = createStore(todoApp,applyMiddleware(...middlewares))

store.subscribe(data => console.log(store.getState()));

fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.error) {
                throw(res.error);
            }
            store.dispatch(fetchEmployeesSuccess(res.data));
            return res.products;
        })


//store.dispatch(addTodo('Learn about actions'))
//store.dispatch(addTodo('Learn about reducers'))
//store.dispatch(addTodo('Learn about store'))
//store.dispatch(toggleTodo(0))
//store.dispatch(toggleTodo(1))
//store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
//
//store.dispatch(addEmployee({fname : 'mitesh', lname: 'patel'}))
