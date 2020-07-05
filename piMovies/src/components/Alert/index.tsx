import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

interface Props {
  showAlert: boolean;
  title: string;
  message: string;
  confirmText: string;
  onConfirm: () => void;
  confirmColor?: string;
  cancelText?: string;
  showCancel?: boolean;
  onCancel?: () => void;
}

const Alert: React.FC<Props> = (props) => {
  const {
    showAlert,
    title,
    message,
    confirmText,
    onConfirm,
    confirmColor,
    cancelText,
    showCancel,
    onCancel,
  } = props;

  const messageStyle = {textAlign: 'center'};

  return (
    <AwesomeAlert
      show={showAlert}
      showProgress={false}
      title={title}
      message={message}
      messageStyle={messageStyle}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      showCancelButton={showCancel}
      showConfirmButton={true}
      cancelText={cancelText || 'Cancelar'}
      confirmText={confirmText || 'Confirmar'}
      confirmButtonColor={confirmColor || '#312e38'}
      onCancelPressed={onCancel}
      onConfirmPressed={onConfirm}
    />
  );
};

export default Alert;
