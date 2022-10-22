import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'
import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const colorMode = useColorScheme()

  return (
    <NavigationContainer
      theme={colorMode === 'dark' ? DarkTheme : DefaultTheme}
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'user-detail': 'user/:id',
            },
          },
        }),
        []
      )}
    >
      <StatusBar style="auto" />
      {children}
    </NavigationContainer>
  )
}
