import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import styled from 'styled-components';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

const Datepicker = ({ period, change }) => {
  const onChange = (_, dates) => {
    period(dates);
    change(_);
  };

  return (
    <Div>
      <Space direction="vertical" size={12}>
        <RangePicker onChange={onChange} />
      </Space>
    </Div>
  );
};
export default Datepicker;

const Div = styled.div`
  div {
    height: 56px;
    border-radius: 12px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
