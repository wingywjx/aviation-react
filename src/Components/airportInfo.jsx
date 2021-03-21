import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import axios from 'axios';

const popupBoxStyle = {
  padding: '10px',
};
const popupStyle = {
  margin: '0',
  textAlign: 'left',
};

function AirportInfo(props) {
  const { info } = props;
  const [visible, setVisible] = useState(false);
  const [detail, setDetail] = useState({});

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log(info.airport_iata);
      const res = await axios.get(
        `http://localhost:5555/api/airport/${info.airport_iata}`
      );
      setDetail(res.data);
      console.log(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div style={popupBoxStyle}>
        <p style={popupStyle}>{`机场名称：${info.airport_name}`}</p>
        <p style={popupStyle}>{`机场 IATA：${info.airport_iata}`}</p>
      </div>
      <Button type="primary" onClick={showDrawer} block>
        More detail
      </Button>
      <Drawer
        width={600}
        title={`Airport Information: ${info.airport_name}`}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>{detail?.metar}</p>
        <p>{detail?.elevation?.ft}</p>
      </Drawer>
    </div>
  );
}

export default AirportInfo;