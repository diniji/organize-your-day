import { Component } from 'react';
import YinYang from './YinYang.jpg';

export class TheOrganizer extends Component {
    state = {
        userInput: "",
        todoList: [],
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input) {
        let userInputWording = this.state.userInput;
        if (userInputWording.length === 0) {
            return false;
        }
        else {
            let userInputList = this.state.todoList;
            userInputList.push(input);
            this.setState({
                todoList: userInputList,
                userInput: ""
        })}
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    liCrossed(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteAllBtn() {
        let userInputList = this.state.todoList;
        userInputList = [];
        this.setState({todoList: userInputList});
    }

    /* TODO: to finish this button later */
    // deleteCrossedBtn() {
    //     let unCrossed = this.state.todoList.filter(item => !item.classList.contains('crossed'));
    //     this.setState({todoList: unCrossed});
    // }

    render() {
        return(
            <div className="container">

                <div>
                    <h1>Okay, what's on today's <br />"Not-To-Be-Forgotten" menu?</h1>
                </div>

                <form onSubmit={this.onFormSubmit}>
                    <input 
                        type="text" 
                        placeholder="To-Do Item..." 
                        onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                        value={this.state.userInput} />
                    <button 
                        onClick={() => this.addItem(this.state.userInput)} 
                        className="btnAdd">+
                    </button>
                </form>

                <ul id='ulItems'>
                    {this.state.todoList.map((item, index) => (
                        <li onClick={this.liCrossed} key={index} className="liStyle">{item}</li>
                    ))}
                </ul>

                <div className="twoDeleteButtons">
                    <button onClick={() => this.deleteCrossedBtn()} className="btnDeleteCrossed">Delete Crossed</button>
                    <button onClick={() => this.deleteAllBtn()} className="btnDeleteAll">Delete All</button> {/* TODO: to finish this button later! */}
                </div>

                <div className="imgAndWordingPosition">
                    <div className="imgAndWording">
                        <div>
                            <img src={YinYang} className="YinYangStyle" width="50px" alt="YinYang" />
                        </div>
                        <div>
                            <p>Kind reminder: Self-care is a divine responsibility.<br />
                            Don't forget to make time for yourself!</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}