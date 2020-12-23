import React, { useContext } from "react";
import AlertContext from "../../context/Alert/alertContext";
import styled from "styled-components";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <StyledAlert key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.message}
      </StyledAlert>
    ))
  );
};

const StyledAlert = styled.div`
    position: fixed;
`

export default Alerts;
