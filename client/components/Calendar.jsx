import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import CalendarMonth from './CalendarMonth.jsx';

const StyledCalendarComponent = styled.div `
  position: absolute;
  left: 300px;
  bottom: auto;
  right: auto;
  z-index: 9991;
  transform: translateZ(0px);

`;

const CalendarBox = styled.div `
  display: flex;
  flex-direction: column;
  position: relative;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,.25));
  transform: translateZ(0);
  background-color: #fff;
  border-radius: 2px;
  width: 600px;
`;

const PickerPointer = styled.div `
  top: 30%;
  right: 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  overflow: hidden;
  background-color: #fff;
  transform: translateX(50%) translateY(-50%) rotate(45deg);
`;

const StyledCalendar = styled.div `
  white-space: nowrap;
  text-align: center;
  display: block;
`;

const TopBar = styled.div `
  text-align: center;
  padding: 15px 0 10px;
  font-size: 15px;
  border: solid #e0e0e0;
  border-width: 0 0 1px;
  font-weight: 700;
  margin: 0 15px;
  color: #000;
`;

const TopBarInset = styled.div `
  padding-top: 4px;
  font-weight: 400;
  font-size: 12px;
  color: #474747;
`;

const LowPrice = styled.span `
  background: #f2b203;
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 2px;
`;

const DayPicker = styled.div `

`;

const Chevron = styled.button `
    height: 36px;
    width: 36px;
    line-height: 36px;
    text-align: center;
    color: #474747;
    cursor: pointer;
    font-size: 20px;
    transition: color .3s;
    border: none;
    text-decoration: none;
    background: #fff;
    padding: 0;
    font-family: inherit;
    z-index: 9999;
    position: relative;
`;

const RightChevron = styled(Chevron) `
  float: right;
`;

const LeftChevron = styled(Chevron) `
  float: left;
`;

const BottomBar = styled.div `
  padding: 16px 0;
  border: solid #e0e0e0;
  border-width: 1px 0 0;
  margin: 0 15px;
`;

const Calendar = ({month1, month2, year}) => {
  return (
    <StyledCalendarComponent>
      <CalendarBox>
        <div>
          <TopBar>
            Select a date to continue
            <TopBarInset>
              <LowPrice></LowPrice>
              {' Lowest Priced Dates'}
            </TopBarInset>
          </TopBar>
          <DayPicker>
              <LeftChevron>{'<'}</LeftChevron>
              <RightChevron>{'>'}</RightChevron>
              <StyledCalendar>
                <CalendarMonth month={month1} year={year} month1={true}/>
                <CalendarMonth month={month2} year={year} month1={false}/>
              </StyledCalendar>
              <BottomBar />
          </DayPicker>
        </div>
        <PickerPointer></PickerPointer>
      </CalendarBox>
    </StyledCalendarComponent>
  );
}

export default Calendar;