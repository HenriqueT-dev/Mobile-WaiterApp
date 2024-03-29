import { FlatList } from 'react-native';
import { Container, ProductImage, ProductDetails, Separator, AddToCartButton } from './styles';
import { Text } from '../Text';
import { formartCurrency } from '../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { useState } from 'react';
import { Product } from '../../types/Product';

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({ onAddToCart, products }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleOpenModal(product : Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (

    <>
      <ProductModal
        visible={isModalVisible}
        onClose={ () => setIsModalVisible(false) }
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={Separator}
        data={products}
        keyExtractor={product => product._id}
        renderItem={({ item: product }) => (
          <Container onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `http://192.168.1.5:3001/uploads/${product.imagePath}`
              }}
            />

            <ProductDetails>
              <Text weight='600'>{product.name}</Text>
              <Text size={14} color='#666' style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight='600'>
                {formartCurrency(product.price)}
              </Text>
            </ProductDetails>

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </Container>
        )}
      />

    </>
  );
}

