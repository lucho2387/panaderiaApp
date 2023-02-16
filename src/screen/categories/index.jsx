import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';
import {CategoryItem, Footer} from '../../components/index'
import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from '../../store/actions';
import { styles } from './styles';

// import { COLORS } from '../../constants/colors/colors';

// Permite acceder al store useSelector
// useDispatch permite llamar acciones dentro de nuestro componente

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  // Traemos los datos de categoria
  const categories = useSelector((state) => state.category.categories); 
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      // categoryId: item.id,
      title: item.title,
      color: item.color,
    })
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data= {categories}
        renderItem={renderItem}
        // id del item
        keyExtractor={keyExtractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerStyle}
      />
      {/* <Footer title='Derechos Reservados 2023'/> */}
    </SafeAreaView>
    
  );
};

export default Categories;
