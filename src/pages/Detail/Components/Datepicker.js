import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const { RangePicker } = DatePicker;

const Datepicker = ({ period, change, item }) => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const checkIn = item[0].book_date[0].check_in_date;
  const checkOut = item[0].book_date[0].check_out_date;

  console.log(dateRange);

  const onChange = dates => {
    const disabledStart = new Date(checkIn);
    const disabledEnd = new Date(checkOut);
    if (
      disabledStart.getTime() > dates[0].getTime() &&
      disabledEnd.getTime() < dates[1]?.getTime()
    ) {
      const changed = [
        dates[0],
        new Date(new Date(disabledStart.setDate(disabledStart.getDate() - 1))),
      ];
      setDateRange(changed);
      period(changed);
      change(changed);
      return;
    }
    period(dates);
    change(dates);
    setDateRange(dates);
  };

  const result = []; // disabled Dates
  const curDate = new Date(checkIn);
  while (curDate <= new Date(checkOut)) {
    result.push(curDate.toISOString().split('T')[0]);
    curDate.setDate(curDate.getDate() + 1);
  }

  // const formatDate = date => dayjs(date).format('YYYY-MM-DD');
  // const arr = dateRange.map(formatDate);

  // const selectsDayResult = [];
  // const selectsDay = new Date(arr[0]);
  // while (selectsDay <= new Date(arr[1])) {
  //   selectsDayResult.push(selectsDay.toISOString().split('T')[0]);
  //   selectsDay.setDate(selectsDay.getDate() + 1);
  // }
  // const formatResult = arr.map(date => new Date(date));
  return (
    <Div>
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
        onChange={onChange}
      />
    </Div>
  );
};
export default Datepicker;

const Div = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  .react-datepicker {
    display: flex;
  }

  input {
    text-align: center;
    width: 100%;
    height: 56px;
    border-style: none;
    border: 1px solid #dddd;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    &:hover {
      cursor: pointer;
    }
  }
  .react-datepicker__close-icon {
  }
`;
