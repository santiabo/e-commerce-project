import React from 'react';

// Components
import ChangePasswordForm from '../../components/ChangePasswordForm';

// Styled Compoents
import { ForcePasswordChangeWrapper } from './styles';

const ForcePasswordChangePage = () => {

  const handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <ForcePasswordChangeWrapper>
      <ChangePasswordForm handleSubmit={handleSubmit} />
    </ForcePasswordChangeWrapper>
  );
};

export default ForcePasswordChangePage;
