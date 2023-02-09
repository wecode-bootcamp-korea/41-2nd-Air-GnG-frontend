import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;

const NavDatePicker = ({ period, change, item, caldate }) => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [startDate, endDate] = dateRange;

  const el = useRef();
  useEffect(() => {
    const outClick = e => {
      if (dropdownVisibility && el.current && !el.current.contains(e.target)) {
        setDropdownVisibility(false);
        console.log('외부');
      }
    };
    document.addEventListener('mousedown', outClick);

    return () => {
      document.removeEventListener('mousedown', outClick);
    };
  }, [dropdownVisibility]);
  console.log(dropdownVisibility);
  const Click = () => {
    setDropdownVisibility(!dropdownVisibility);
  };

  const caldates = update => {
    setDateRange(update);
    caldate(update);
  };
  const formatDate = date => dayjs(date).format('YYYY-MM-DD');
  const arr = dateRange.map(formatDate);

  const result = []; // disabled Dates

  const selectsDayResult = [];
  const selectsDay = new Date(arr[0]);
  while (selectsDay <= new Date(arr[1])) {
    selectsDayResult.push(selectsDay.toISOString().split('T')[0]);
    selectsDay.setDate(selectsDay.getDate() + 1);
  }
  const formatResult = arr.map(date => new Date(date));

  return (
    <Div ref={el}>
      <DatePicker
        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div>
            <button
              aria-label="Previous Month"
              className="react-datepicker__navigation react-datepicker__navigation--previous"
              style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
              onClick={decreaseMonth}
            >
              <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
                {'<'}
              </span>
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <button
              aria-label="Next Month"
              className="react-datepicker__navigation react-datepicker__navigation--next"
              style={customHeaderCount === 0 ? { visibility: 'hidden' } : null}
              onClick={increaseMonth}
            >
              <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
                {'>'}
              </span>
            </button>
          </div>
        )}
        monthsShown={2}
        excludeDates={result.map(date => addDays(new Date(date), 0))}
        selectsRange
        selectsDisabledDaysInRange={result.map(date =>
          addDays(new Date(date), 0)
        )}
        startDate={startDate}
        endDate={endDate}
        // onChange={onChange}
        onChange={caldates}
      />
    </Div>
  );
};
export default NavDatePicker;

const Div = styled.div`
  position: absolute;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .react-datepicker {
    display: flex;
  }

  input {
    text-align: center;
    width: 100%;
    height: 56px;
    border-style: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }
  }
  .react-datepicker__close-icon {
  }
`;
