import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

function ExpensesSummary({ expenses, periodName }) {
    // reduce()- array built in method - allow you to combine multiple value in a array into a single value or number
    // (sum, expense) 1st arg and '0' is 2nd arg , if we don't add '0' then it will be undefined
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0); // starting value 0

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      {/* Here '$' is currency - '${expensesSum.toFixed(2)}' */}
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text> 
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});