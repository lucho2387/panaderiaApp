import { Button, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../../constants/colors/colors';
import { styles } from "./styles";

const ProductDetails = ({ navigation, route }) => {
  const product = useSelector((state) => state.products.selected);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerContent}>
        <View  style={styles.description}>
          <Text style={styles.title1}>{product.title}</Text>
          <Text style={styles.title}>{product.description}</Text>
          <Text style={styles.title}>x {product.weight}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Categories')}
          style={styles.button}
          color={COLORS.colorCategory1}
        >
          <Text style={styles.buttonTitle}>Ir a las Categorias</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;