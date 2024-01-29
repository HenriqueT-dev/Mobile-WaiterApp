import { FlatList } from 'react-native';

import { Text } from '../Text';
import { Container, Icon } from './styles';
import { useState } from 'react';
import { Category } from '../../types/Category';

interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => Promise<void>;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    onSelectCategory(category);
    setSelectedCategory(category);
  }
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24}}
      data={categories}
      keyExtractor={category => category._id}
      renderItem={({ item: category}) => {
        const isSelected = selectedCategory === category._id;
        return(
          <Container onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>

            <Text size={14} weight='600'  opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </Container>
        );
      }}
    />
  );
}
//este renderItem recebe nao a data direto, mais uma prop que recebe 3 parametros: index, item, separators. Por isso
//a gente pega primeiro o (valor) depois o (item) que queremos iterar e só depois de fato o dado que queremos atraves das props
// ex de função simples: renderItem={({ item: category })} = assim passariamos a usar {category.icon}
