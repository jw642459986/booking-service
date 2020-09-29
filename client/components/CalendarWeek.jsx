import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CalendarDay from './CalendarDay.jsx';

const Week = styled.tr`
  display: grid;
  grid-template-areas: 'sunday monday tuesday wednesday thursday friday saturday';
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;
var CalendarWeek = ({weeks, start, week, setCheckIn, month, year}) => {
  let days = [];
  let count = 0;
  for ( var i = 0; i < week; i++) {
    count += weeks[i];
  }
  count++;
  for (var i = 0; i < 7; i++) {
    if ((start > 0 && i >= start) || (start === 0 && i < weeks[week])) {
      let day = new Date(year, month, count);
      days.push(day);
      count++;
    } else {
      days.push(undefined);
    }
  }


  return (
    <Week>
      {days.map((day, index) => <CalendarDay day={day} key={index} setCheckIn={setCheckIn}/>)}
    </Week>
  )
}


export default CalendarWeek;