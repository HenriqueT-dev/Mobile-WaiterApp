import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Container, Content, OrderHeader, Table } from './styles';

interface HeaderProps {
  selectedTable: string;
  onCancel: () => void;
}

export function Header({ selectedTable, onCancel }: HeaderProps) {
  return(
    <Container>
      {!selectedTable && (
        <>
          <Text size={16} opacity={0.9}>Bem-Vindo(a) ao</Text>
          <Text size={24} weight='700'>WAITER<Text size={24}>APP</Text></Text>
        </>
      )}
      {selectedTable && (
        <Content>
          <OrderHeader>
            <Text size={24} weight='600'>Pedido</Text>
            <TouchableOpacity onPress={onCancel}>
              <Text size={16} weight='600' color='#D73035'>cancelar pedido</Text>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <Text color='#666'>Mesa {selectedTable}</Text>
          </Table>
        </Content>
      )}
    </Container>
  );
}
