import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const teams = [
  { id: 1, name: 'Los Angeles Lakers' },
  { id: 2, name: 'Golden State Warriors' },
  { id: 3, name: 'Chicago Bulls' },
  // Add more teams as needed
];

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Jessica</Text>
      <Button
        title="Go to Details"
        // onPress={() => navigation.navigate('Teams')}
      />
    </View>
  );
}

function Teams() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>Team Name</Text>
        <Text style={styles.header}>Team ID</Text>
        <Text style={styles.header}>Options</Text>
      </View>
      <FlatList
        data={teams}
        keyExtractor={(team) => team.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.id}</Text>
            <TouchableOpacity onPress={() => handleEdit(item)}>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Teams" component={Teams} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const handleEdit = (team) => {
  // Handle edit logic here
  console.log('Edit team:', team);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cell: {
    flex: 1,
  },
  editButton: {
    color: 'blue', // or your desired color
  },
  header: {
    fontWeight: 'bold',
    flex: 1,
  },
});
