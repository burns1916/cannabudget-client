import React, { Component } from "react";
import { connect } from "react-redux";
import { setCrop, unsetCrop } from '../actions/crops'
import { addIncome, getIncomes } from "../actions/incomes";
import { addExpense, getExpenses } from "../actions/expenses";
import IncomeForm from '../components/IncomeForm'
import ExpenseForm from '../components/ExpenseForm'
import Incomes from "../components/Incomes";
import Expenses from "../components/Expenses";
import BalanceLedger from "../components/BalanceLedger";

class TransactionContainer extends Component {
    state = {
        incomeModal: false,
        incomeForm: {
            name: '',
            amount: '',
            crop_id: this.props.match.params.id
        },
        expenseModal: false,
        expenseForm: {
            name: '',
            amount: '',
            crop_id: this.props.match.params.id
        },

    }

    toggleIncomeModal = () => this.setState({incomeModal: !this.state.incomeModal})
    toggleExpenseModal = () => this.setState({expenseModal: !this.state.expenseModal})

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.setCrop(id)
        this.props.getIncomes()
        this.props.getExpenses()
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
            incomeModal: false,
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
            expenseModal: false,
            expenseForm: {
                name: '',
                amount: '',
                crop_id: this.props.match.params.id,
            }
        })
    }

    openNewIncomeForm = () => this.setState({
        incomeModal: true,
        incomeForm: {
            name: '',
            amount: '',
            crop_id: this.props.match.params.id,
        }
    })

    openNewExpenseForm = () => this.setState({
        expenseModal: true,
        expenseForm: {
            name: '',
            amount: '',
            crop_id: this.props.match.params.id,
        }
    })

    render() {
        const { strain_name, } = this.props
        return (
            <>
            <h3>Strain: {strain_name}</h3>
            {/* {this.props.incomes && this.props.expenses.filter(transaction => transaction.crop.id === parseInt(this.props.match.params.id)).map((transaction) => <BalanceLedger key={transaction.id} {...transaction}/>)} */}
            <button onClick={this.openNewIncomeForm}>New Sale</button>
            <IncomeForm toggle={this.toggleIncomeModal} {...this.state.incomeForm} display={this.state.incomeModal} onChange={this.onIncomeChange} onSubmit={this.onIncomeSubmit} />
            <button onClick={this.openNewExpenseForm}>New Expense</button>
            <ExpenseForm toggle={this.toggleExpenseModal} {...this.state.expenseForm} display={this.state.expenseModal} onChange={this.onExpenseChange} onSubmit={this.onExpenseSubmit} />
            {this.props.incomes.filter(income => income.crop.id === parseInt(this.props.match.params.id)).map((income) => <Incomes key={income.id} {...income}/>)}
            {this.props.expenses.filter(expense => expense.crop.id === parseInt(this.props.match.params.id)).map((expense) => <Expenses key={expense.id} {...expense}/>)}
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

export default connect(mapStateToProps, { setCrop, unsetCrop, addIncome, addExpense, getIncomes, getExpenses })(TransactionContainer)