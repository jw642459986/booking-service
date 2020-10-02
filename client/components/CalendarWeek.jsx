import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CalendarDay from './CalendarDay.jsx';

const Week = styled.div`
  display: flex;
`;

const Day = styled.div `
  height: 36px;
  line-height: 36px;
  font-size: 11px;
  flex: 1 0;
  display: inline-block;
  border: 1px solid rgba(0,0,0,0);
  margin: -1px 0 0 -1px;
`;

const Weekend = styled(Day) `
  font-weight: 700;
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