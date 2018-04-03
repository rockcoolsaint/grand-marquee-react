'use strict'
/*
** <Marquee
**   totalDisplays={Integer: Min 1, Max 10}
**   display1={String: display string one}
**   ...
**   display11={String: display string eleven}
**   changeTime={Integer: in miliseconds, defaults to 2000}
**   crossTime={Integer: in miliseconds, defaults to 8000}
**   randomDisplayChange={Boolean: defaults to false}
**   htmlTag={HTML tag name: 'h1',...,'h6', 'p', etc., defaults to 'h3'}
**   color={String: css acceptable color, lowercase, default purple}
** />

** @keyframes marquee {
**     0%   { transform: translate(0, 0); animation-timing-function: ease-in;}
**     100% { transform: translate(-100%, 0); animation-timing-function: ease-out;}
** }
*/
import React from 'react'
class Marquee extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        totalDisplays:10,
        display1:'a',
        display2:'b',
        display3:'c',
        display4:'d',
        display5:'e',
        display6:'f',
        display7:'g',
        display8:'h',
        display9:'i',
        display10:'j',
        changeTime:1000,
        crossTime:10000,
        randomDisplayChange:false,
        htmlTag:'h1',
        color:'purple',
        currentlyDisplayedIndex: 1,
        currentlyDisplayedData: 'loading...'
      };
      this.marqueeDisplayChange = this.marqueeDisplayChange.bind(this);
  }

  componentDidMount(){
    this.setState({
      currentlyDisplayed: this.props.display1,
      totalDisplays: this.props.totalDisplays || 1,
      changeTime: this.props.changeTime || 2000,
      crossTime: this.props.crossTime || 8000,
      randomDisplayChange: this.props.randomDisplayChange || false,
      htmlTag: this.props.htmlTag || 'h3',
      color: this.props.color || 'purple'
    })
    this.props.display1 ? this.setState({display1: this.props.display1}) : delete this.state.display1
    this.props.display2 ? this.setState({display2: this.props.display2}) : delete this.state.display2
    this.props.display3 ? this.setState({display3: this.props.display3}) : delete this.state.display3
    this.props.display4 ? this.setState({display4: this.props.display4}) : delete this.state.display4
    this.props.display5 ? this.setState({display5: this.props.display5}) : delete this.state.display5
    this.props.display6 ? this.setState({display6: this.props.display6}) : delete this.state.display6
    this.props.display7 ? this.setState({display7: this.props.display7}) : delete this.state.display7
    this.props.display8 ? this.setState({display8: this.props.display8}) : delete this.state.display8
    this.props.display9 ? this.setState({display9: this.props.display9}) : delete this.state.display9
    this.props.display10 ? this.setState({display10: this.props.display10}) : delete this.state.display10
    
    setTimeout(function() { this.marqueeDisplayChange() }.bind(this), 250);
  }

    marqueeDisplayChange () {

      if(this.state.randomDisplayChange){

        var that = this
        var intervalTime = this.state.changeTime
        
        setInterval(function() {
          var randomIndex = Math.floor((Math.random() * that.state.totalDisplays) + 1)
          that.setState({
            currentlyDisplayedData: that.state["display"+randomIndex]
          })
        }, intervalTime);
        
      }else{
  
        var that = this
        var intervalTime = this.state.changeTime
        
        setInterval(function() {
          var nextIndex = that.state.currentlyDisplayedIndex
          var updateStateWith = nextIndex + 1
          updateStateWith ===  (that.state.totalDisplays + 1) ? updateStateWith = 0 : updateStateWith = nextIndex + 1
          that.setState({currentlyDisplayedData: that.state["display"+nextIndex],currentlyDisplayedIndex: updateStateWith})
        }, intervalTime);
        
      }
    }

    render() {
      var marquee = this.state.currentlyDisplayedData
      let style1 =  {margin: '0 auto',whiteSpace: 'nowrap',overflow: 'hidden'}
      let style2 = {display: 'inline-block',paddingLeft: '100%',animation: 'marquee '+Number(this.state.crossTime)+'ms linear infinite',color: this.state.color}

      return (

        <section id="marquee">
          <this.state.htmlTag style={ style1 }>
            <span style={ style2 }>{ marquee }</span>
          </this.state.htmlTag>
        </section>

      );
    }
}

export default Marquee;