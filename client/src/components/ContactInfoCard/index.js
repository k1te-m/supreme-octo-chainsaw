import React from "react";
import styled, { keyframes } from "styled-components";

const ContactInfoCard = () => {
    return (
        <Card className="card">
            <i class="fas fa-info-circle" />
        </Card>
    )
}

const pulse = keyframes`
    from { transfrom: scale(1); }
    50% { transform: scale(.85); }
    to { transform: scale(1);}
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border: 2px solid #e6aa68;
  background: #fffbbd;
  i {
      font-size: 2rem;
      color: black;
  }
  i:hover {
    animation: ${pulse} 1s infinite;
  }
`;

export default ContactInfoCard;