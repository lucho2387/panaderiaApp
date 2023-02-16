import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';

import { ORDERS } from '../../constants/data/orders';
import { OrderItem } from '../../components';
import { styles } from './styles';

// import {CategoryItem, Footer} from '../../components/index'

// import { CATEGORIES } from '../../constants/data/index'
// import { COLORS } from '../../constants/colors/colors';


const Orders = ({ navigation }) => {
  
  const total = 22000
  const onDeleted = (id) => {};
  const renderItem = ({ item }) => <OrderItem item={item} onDeleted={onDeleted} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList 
          data={ORDERS}
          renderItem = {renderItem}
          keyExtractor= {keyExtractor}
          style={styles.listContainerProduct}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => null}>
          <Text style={styles.buttonConfirmText}>Confirmar</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>$ {total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Orders;