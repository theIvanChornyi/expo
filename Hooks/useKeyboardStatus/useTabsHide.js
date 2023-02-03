import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

export const useTabsHide = ({ navigation, route }) => {
  const tabHiddenRoutes = ['comments', 'map'];

  return useLayoutEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
          paddingTop: 9,
          paddingHorizontal: 82,
          height: 83,
          paddingBottom: 34,
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -0.5 },
              shadowOpacity: 0.3,
              shadowRadius: 0,
            },
            android: {
              elevation: 1,
            },
          }),
        },
      });
    }
  }, [navigation, route]);
};
