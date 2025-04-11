import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';

const Stack = createNativeStackNavigator();
const BottmTabs = createBottomTabNavigator();

// Bottom Tabs navigation
const ExpensesOverview = () => {
  return (
    <BottmTabs.Navigator>
      <BottmTabs.Screen  name='RecentExpenses' component={RecentExpenses}/>
      <BottmTabs.Screen name='AllExpensess' component={AllExpenses}/>
    </BottmTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          {/* initial screen - ExpensesOverview */}
          <Stack.Screen name='ExpensesOverview' component={ExpensesOverview}/>
          <Stack.Screen name='ManageExpense' component={ManageExpense}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


