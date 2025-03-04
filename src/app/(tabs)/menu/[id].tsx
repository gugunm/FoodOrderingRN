import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ title: 'Details ' + id }} />

      <Text>Hello from detail page {id}</Text>
    </View>
  );
};

export default ProductDetailScreen;
