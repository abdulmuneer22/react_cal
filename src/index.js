import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

class Calendar extends React.Component {

  constructor(){
    super();
    this.state = {
      currentMonth : '',
      currentYear : '',
      currentMonthNumber : '',
      selectedDate : ''
    }
  }


  _renderCalendarDays(){
    let currentMonth = this.state.currentMonthNumber;
    let currentYear = new Date().getFullYear();
    let daysInMonth = this._daysInMonth(currentYear,currentMonth)
    // console.log("days in month" , daysInMont)
    let startDate = 1;
    let daysArray = [];
    let daysNameArray = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    let dayNames = []
    
    daysNameArray.forEach((day)=>{
      dayNames.push(
      <div style={{
      width : 700/7,
      float : 'left'
      }}>{day}</div>)
    })

    var firstDayNumber = new Date(currentYear + "-" + (currentMonth+1) + "-01").getDay() 
    console.log("first" , firstDayNumber)

    daysArray.push(
      <div
      onClick = {()=> {
        this.setState({
          selectedDate : 1
        })
      }}
      style={{
      width : (700/7) * (firstDayNumber + 1),
      float : 'left',
      textAlign : 'right',
      paddingRight : 700/7 - 5,
      backgroundColor : this.state.selectedDate === 1 ? 'red' : 'white',
      }}>
      1
      </div>
    )

    for(let i = startDate+1 ; i < daysInMonth + 1 ; i++) {
      daysArray.push(
      <div 
      onClick = {()=>{
        this.setState({
          selectedDate : i
        })
      }}
      style={{
      width : 700/7,
      float : 'left'
      }}>
      <div style={{
        backgroundColor : this.state.selectedDate === i ? 'red' : 'white',
        margin : 2,
        textAlign : 'center'
      }}>
      {i}
      </div>
      </div>)
    }


    return <div style={{}}>
    {dayNames}
    {daysArray}
    </div>;
  }


  _daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  

  componentWillMount(){
    var d = new Date();
    this.setState({
      currentMonth : monthNames[d.getMonth()],
      currentYear : d.getFullYear(),
      currentMonthNumber : d.getMonth()
    })
  }


  render() {
    return (
      <div className='container' style={{
        padding : 20,
        margin : 20,
        borderWidth : 1,
        borderStyle : 'solid',
        //backgroundColor : 'red',
        marginLeft : 'auto',
        marginRight : 'auto'
      
      }}>

        <div style={{
          flex : 1,
          display : 'flex',
          margin : 20
        }}>

        <div style={{
          float : 'left',
          display : 'flex',
          flex : 1
        }}
        onClick = {()=> {
          this.setState({
            currentMonth : monthNames[this.state.currentMonthNumber - 1],
            currentMonthNumber : this.state.currentMonthNumber - 1
          })
        }}
        >Prev</div>
        
        <div style={{
          float : 'right'
        }}
        onClick = {()=> {
          this.setState({
            currentMonth : monthNames[this.state.currentMonthNumber + 1],
            currentMonthNumber : this.state.currentMonthNumber + 1
          })
        }}
        >Next</div>

        </div>
        <div style={{
          backgroundColor :'green',
          width : '500',
          marginLeft : 'auto',
          marginRight: 'auto',
          fontSize : 18,
          textAlign : 'center'
        }}>
          {this.state.currentMonth} - {this.state.currentYear}
          
        </div>
        <div style={{
          width : 700,
          backgroundColor : 'red',
          margin : 'auto'
          
        }}>
          {this._renderCalendarDays()}
        </div>
      </div>
    );
  }
};


ReactDOM.render(<Calendar />, document.getElementById('root'));
