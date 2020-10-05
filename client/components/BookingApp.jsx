import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import axios from 'axios';
import moment from 'moment';

import Calendar from './Calendar.jsx';
import Booking from './Booking.jsx';


import CalendarHelper from '../helpers/calendar.js';



// const Calendars = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   position: relative;
//   box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
// `;


const StyledBookingApp = styled.div`
  margin: 8px 0;
  height: 44px;
`;


const BookingApp = () => {
  const [trips, setTrips] = useState([]);
  const [today, setToday] = useState(new Date())
  const [month1, setMonth1] = useState();
  const [month2, setMonth2] = useState();
  const [year, setYear] = useState()
  const [year2, setYear2] = useState()


  const [lowDays, setLowDays] = useState([new Date()]);

  const [checkInPicker, setCheckInPicker] = useState(false);
  const [checkOutPicker, setCheckOutPicker] = useState(false);

  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  useEffect(() => {
    setYear(today.getFullYear());
    setMonth1(today.getMonth());

    setYear2(today.getFullYear())

    setLowDays(CalendarHelper.prototype.randomDates(today, new Date(today.getTime() + 10000000000), 50));
    axios({
      url: '/api/trips/0',
      method: 'get',
    })
    .then((result) => {
      setTrips(result.data)
    })
  },[]);

  useEffect(() => {
    if (month1 < 0) {
      setMonth1(11);
      setYear(year - 1);
    } else if ((month1 / 12) >= 1) {
      setMonth1(month1 % 12);
      setYear(year + 1);
    }
    if (month1 === 10 && year != year2) {
      setYear2(year)
    } else if (((month1 + 1) / 12) >= 1) {
      setYear2 (year + 1);
    }
    setMonth2((month1 + 1) % 12)
  }), [month1];

  useEffect(() => {
    if (checkOutDate) {
      if (checkInDate.getDate() >= checkOutDate.getDate()) {
        if (checkInDate.getMonth() >= checkOutDate.getMonth()) {
          if (checkInDate.getFullYear() >= checkOutDate.getFullYear()) {
            setCheckOutDate(undefined);
          }
        }
      }
    }
    setCheckInPicker(false);
    setCheckOutPicker(true);
  }, [checkInDate]);

  useEffect(() => {
    setCheckOutPicker(false);
  }, [checkOutDate]);

  if (!checkInPicker && !checkOutPicker) {
    return (
      <StyledBookingApp>
        <Booking  setCheckOutPicker={setCheckOutPicker} setCheckInPicker={setCheckInPicker} checkInPicker={checkInPicker} checkOutPicker={checkOutPicker} checkInDate={checkInDate} checkOutDate={checkOutDate}/>
      </StyledBookingApp>
    );
  } else {
    return (
      <StyledBookingApp>
        <Booking setCheckOutPicker={setCheckOutPicker} setCheckInPicker={setCheckInPicker} checkInPicker={checkInPicker} checkOutPicker={checkOutPicker} checkInDate={checkInDate} checkOutDate={checkOutDate}/>
        <Calendar year={year} year2={year2} month1={month1} month2={month2} setMonth1={setMonth1} checkInPicker={checkInPicker} checkOutPicker={checkOutPicker} lowDays={lowDays} setCheckInDate={setCheckInDate} setCheckOutDate={setCheckOutDate} checkInDate={checkInDate} checkOutDate={checkOutDate}/>
      </StyledBookingApp>
    );
  }
}



export default BookingApp;

