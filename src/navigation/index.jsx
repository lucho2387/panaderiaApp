import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from './shop'
import TabsNavigator from './tabs';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabsNavigator/>
            {/* <Tabs /> */}
            {/* <ShopNavigator /> */}
        </NavigationContainer>
    )
}

export default AppNavigator;