import React, { useState } from 'react'
import calcicon from '../assets/icons/calcicon.png'
import switchIcon from '../assets/icons/switch.png'
import onoffvoice from '../assets/voices/on_offvoice.wav'
import clickedvoice from '../assets/voices/clickedvoice.wav'
import errorvoice from '../assets/voices/errorvoice.wav'
import './Calculator.css'


function Calculator() {


    const [inputValue, setInputValue] = useState('')
    const [switchValue, setSwitchValue] = useState(false)
    const [switchDisable, setSwitchDisable] = useState(true)
    const [inputDisable, setInputDisable] = useState(true)


    const writeValueScreen = (e) => {
        setInputValue(inputValue + e.target.value)
        new Audio(clickedvoice).play();
    }

    const switchChange = () => {
        setInputValue("")
        setSwitchValue(!switchValue)
        setInputDisable(!inputDisable)
        new Audio(onoffvoice).play();
        setSwitchDisable(!switchDisable)
    }

    const calculate = () => {
        try {
            setInputValue(eval(inputValue))
            new Audio(clickedvoice).play();
        } catch (error) {
            new Audio(errorvoice).play();
            setInputValue("Düzgün daxil edin!")
        }
    }

    const deleteButton = () => {
        setInputValue('')
        new Audio(clickedvoice).play();
    }

    const backDelete = () => {
        setInputValue(inputValue.toString().slice(0, -1))
        new Audio(clickedvoice).play();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6 col-sm-12">
                    <center>
                        <div className="calculator-outer">

                            <img className="calcicon" src={calcicon} />
                            <div className="calculator">

                                <img
                                    onClick={switchChange}
                                    className="btn-switch"
                                    src={switchIcon} />
                                <center>
                                    <h2 className="calc-title"><i>Calculator</i></h2>

                                    <input value={inputValue}
                                        style=
                                        {inputDisable
                                            ? { backgroundColor: '#afafaf' }
                                            : { backgroundColor: 'white' }
                                        }
                                        disabled={inputDisable}
                                        className="calculator-screen" />
                                    <div
                                        style={switchValue
                                            ? { backgroundColor: 'red' }
                                            : { backgroundColor: '#ecec20a3' }
                                        }
                                        className="lightscreen">
                                    </div>
                                    <button
                                        disabled={switchDisable}
                                        onClick={backDelete}
                                        className="btn btn-primary btn-calc">
                                        <span>&#8592;</span>
                                    </button>
                                    <button
                                        disabled={switchDisable}
                                        onClick={deleteButton}
                                        className="btn btn-primary btn-calc">C</button>
                                    <button
                                        disabled={switchDisable}
                                        onClick={writeValueScreen}
                                        value="."
                                        className="btn btn-primary btn-calc">&#x2022;
                                    </button>
                                    <button
                                        disabled={switchDisable}
                                        onClick={writeValueScreen}
                                        value="+"
                                        className="btn btn-primary btn-calc">+</button>

                                    <button
                                        disabled={switchDisable}
                                        value="7"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">7</button>
                                    <button
                                        disabled={switchDisable}
                                        value="8"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">8</button>
                                    <button
                                        disabled={switchDisable}
                                        value="9"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">9</button>
                                    <button
                                        disabled={switchDisable}
                                        value="-"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">-</button>



                                    <button
                                        disabled={switchDisable}
                                        value="4"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">4</button>
                                    <button
                                        disabled={switchDisable}
                                        value="5"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">5</button>
                                    <button
                                        disabled={switchDisable}
                                        value="6"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">6</button>
                                    <button
                                        disabled={switchDisable}
                                        value="*"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">x</button>


                                    <button
                                        disabled={switchDisable}
                                        value="1"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">1</button>
                                    <button
                                        disabled={switchDisable}
                                        value="2"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">2</button>
                                    <button
                                        disabled={switchDisable}
                                        value="3"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">3</button>
                                    <button
                                        disabled={switchDisable}
                                        value="/"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">/</button>

                                    <button
                                        disabled={switchDisable}
                                        value="0"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">0</button>
                                    <button
                                        disabled={switchDisable}
                                        value="("
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">(</button>
                                    <button
                                        disabled={switchDisable}
                                        value=")"
                                        onClick={writeValueScreen}
                                        className="btn btn-primary btn-calc">)</button>
                                    <button
                                        disabled={switchDisable}
                                        value="="
                                        onClick={calculate}
                                        style={{ backgroundColor: 'rgb(233,37,77)' }}
                                        className="btn btn-danger  btn-calc">=</button>
                                </center>
                            </div>
                        </div>
                        <h5>Calculator</h5>
                    </center>
                </div>
                <div className="col-md-3">
                </div>

            </div>

        </div >
    )
}

export default Calculator;