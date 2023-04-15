import React,{Component} from 'react'

import './index.css'

class StopWatch extends Component{

    state = {isTimerRunning : false, timeElapsedInSeconds : 0}

    componentWillUnmount(){
        clearInterval(this.timeInterval)
    }

    onReset= ()=>{
        clearInterval(this.timeInterval)
        this.setState({timeElapsedInSeconds: 0})
    }

    onStop = ()=>{
        clearInterval(this.timeInterval)
        this.setState({isTimerRunning : false})
    }

    updateTime = ()=>{
        this.setState(prevState=>({
            timeElapsedInSeconds : prevState.timeElapsedInSeconds + 1
        }))
    }

    onStart = () =>{
        this.timeInterval = setInterval(this.updateTime,1000)
        this.setState({isTimerRunning : true})
    }

    renderSeconds = () =>{
        const {timeElapsedInSeconds} = this.state
        const outSeconds = Math.floor(timeElapsedInSeconds%60)
        if(outSeconds<10){
            return `0${outSeconds}`
        }
        return outSeconds
    }
    renderMinutes = () =>{
        const {timeElapsedInSeconds} = this.state
        const minutes = Math.floor(timeElapsedInSeconds/60)
        if(minutes<10){
            return `0${minutes}`
        }
        return minutes
    }

    render(){
        const {isTimerRunning, timeElapsedInSeconds} = this.state
        const time = `${this.renderMinutes()}: ${this.renderSeconds()}`
        
        return(
            <div className='card'>
                <div className='watchTime'>
                <h1>Stopwatch</h1>
                <div className="shadow-card">
                    <div className='timer'>
                        <div className='image'>
                            <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stopwatch"/>
                        </div>
                        <h3>Timer</h3>
                    </div>
                    <h1>{time}</h1>
                    <div className='buttons'>
                        <button className='start' type="button" onClick={this.onStart}>Start</button>
                        <button className='stop' type="button"onClick={this.onStop}>Stop</button>
                        <button className='reset' type="button" onClick={this.onReset}>Reset</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default StopWatch