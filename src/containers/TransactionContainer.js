import React, { Component } from "react";
import { connect } from "react-redux";
import { setCrop, unsetCrop } from '../actions/crops'
import { addIncome } from "../actions/incomes";
import { addExpense } from "../actions/expenses";
import IncomeForm from '../components/IncomeForm'
import ExpenseForm from '../components/ExpenseForm'

class TransactionContainer extends Component {
    state = {
        incomeForm: {
            name: '',
            amount: '',
            crop_id: this.props.match.params.id
        },
        expenseForm: {
            name: '',
            amount: '',
            crop_id: this.props.match.params.id
        },

    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.setCrop(id)
    }

    componentWillUnmount() {
        this.props.unsetCrop()
    }

    onIncomeChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ incomeForm:
                    {
                        ...this.state.incomeForm,
                        [name]: value
                    }
                })
    }

    onIncomeSubmit = (e) => {
        e.preventDefault();
        this.props.addIncome(this.state.incomeForm)
        this.setState({
            incomeForm: {
                name: '',
                amount: '',
                crop_id: this.props.match.params.id,
            }
        })
    }


    onExpenseChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ expenseForm:
                    {
                        ...this.state.expenseForm,
                        [name]: value
                    }
                })
    }

    onExpenseSubmit = (e) => {
        e.preventDefault();
        this.props.addExpense(this.state.expenseForm)
        this.setState({
            expenseForm: {
                name: '',
                amount: '',
                crop_id: this.props.match.params.id,
            }
        })
    }

    render() {
        const { strain_name, } = this.props
        return (
            <>
            <h3>Strain: {strain_name}</h3>
            <h4>Crop Sale:</h4>
            <IncomeForm {...this.state.incomeForm} onChange={this.onIncomeChange} onSubmit={this.onIncomeSubmit} />
            <h4>Crop Expense:</h4>
            <ExpenseForm {...this.state.expenseForm} onChange={this.onExpenseChange} onSubmit={this.onExpenseSubmit} />
            </>

        )
    }
}

const mapStateToProps = (state) => ({
    ...state.crops.selectedCrop,
    currentUser: state.currentUser.currentUser,
    incomes: state.incomes.incomes,
    expenses: state.expenses.expenses,
})

export default connect(mapStateToProps, { setCrop, unsetCrop, addIncome, addExpense })(TransactionContainer)