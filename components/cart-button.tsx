import { images } from "@/constants";
import cn from "clsx";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

interface Props extends TouchableOpacityProps {}

const CartButton = ({ className, ...rest }: Props) => {
  const totalItems = 10;

  return (
    <TouchableOpacity className={cn("cart-btn", className)} {...rest}>
      <Image source={images.bag} className="size-5" resizeMode="contain" />

      {totalItems > 0 && (
        <View className="cart-badge">
          <Text className="small-bold text-white">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
