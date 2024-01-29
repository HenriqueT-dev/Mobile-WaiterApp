import { Modal } from 'react-native';
import { OkButton, Overlay } from './styles';
import { Text } from '../Text';
import { CheckCircle } from '../Icons/CheckCircle';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return(
    <Modal
      visible={visible}
      animationType='fade'
    >
      <Overlay>
        <CheckCircle />

        <Text size={20} weight='600' color='#FFF' style={{ marginTop: 12}}>Pedido confirmado</Text>
        <Text color='#FFF' opacity={0.9} style={{ marginTop: 4}}>O pedido já entrou na fila de produção!</Text>

        <OkButton onPress={onOk}>
          <Text weight='600' color='#D73035'>OK</Text>
        </OkButton>
      </Overlay>
    </Modal>
  );
}
