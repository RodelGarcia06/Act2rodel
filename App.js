import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons or any other icon library

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.iconCenter}>
          <Ionicons
            name="logo-google" // Use the Google logo or a suitable icon name
            size={30} // Adjust the size as needed
            color="#4285F4" // Google's logo color
            style={styles.googleIcon}
          />
        </View>
        <Text style={styles.title}>oogle</Text>
      </View>
      <TouchableOpacity
        style={styles.shopButton}
        onPress={() => {
          // Handle shop button functionality here
        }}
      >
        <Ionicons
          name="pricetags" // Tag icon
          size={20} // Adjust the size as needed
          color="black" // Set the color to black
          style={styles.tagIcon}
        />
        <Text style={styles.shopButtonText}>Shop for products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.newsButton}
        onPress={() => {
          // Handle news button functionality here
        }}
      >
        <Ionicons
          name="newspaper" // Icon for news article (customize as needed)
          size={20} // Adjust the size as needed
          color="black" // Set the color to black
          style={styles.newsIcon}
        />
        <Text style={styles.newsButtonText}>
          Stop playing Digital Storage. Clean up your Google Drive and Gmail instead
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.balilihanButton}
        onPress={() => {
          // Handle "Balilihan" button functionality here
        }}
      >
        <Ionicons
          name="partly-sunny" // Weather icon (customize as needed)
          size={20} // Adjust the size as needed
          color="black" // Set the color to black
          style={styles.weatherIcon}
        />
        <Text style={styles.balilihanButtonText}>Balilihan 79°F</Text>
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search" // You can use a different icon name as per your choice
          size={24}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search Google"
          style={styles.searchInput}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            // Handle search functionality here
          }}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
        <Ionicons
          name="mic" // Microphone icon
          size={24}
          color="gray"
          style={styles.microphoneIcon}
        />
        <Ionicons
          name="camera" // Camera icon
          size={24}
          color="gray"
          style={styles.cameraIcon}
        />
        <View style={styles.smallIconContainer}>
          <Ionicons
            name="ios-apps" // You can change this to any suitable icon name for "R"
            size={16} // Adjust the size as needed
            color="purple" // Set the color to purple
          />
        </View>
      </View>
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.bottomButton}>
          <Ionicons name="compass" size={20} color="gray" style={styles.bottomButtonIcon} />
          <Text style={styles.bottomButtonText}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Ionicons name="search" size={20} color="gray" style={styles.bottomButtonIcon} />
          <Text style={styles.bottomButtonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Ionicons name="bookmark" size={20} color="gray" style={styles.bottomButtonIcon} />
          <Text style={styles.bottomButtonText}>Saved</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set your desired background color
    paddingTop: 20, // Add top padding to align elements at the top
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 100, // Add horizontal padding for spacing
  },
  iconCenter: {
    flexDirection: 'row', // Align icons horizontally
    alignItems: 'center',
  },
  googleIcon: {
    marginRight: 5, // Add right margin for spacing
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4285F4', // Google's logo color
  },
  shopButton: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    backgroundColor: '#007AFF', // Set the button background color
    paddingHorizontal: 10, // Add horizontal padding for spacing
    paddingVertical: 5, // Add vertical padding for spacing
    position: 'absolute',
    top: 120, // Move the button to the top below the search widget
    left: 20, // Adjust the left position for the shop button
    borderRadius: 5, // Add border radius for a rounded button
  },
  tagIcon: {
    marginRight: 5, // Add right margin for spacing
    color: 'white', // Set the tag icon color to white
  },
  shopButtonText: {
    color: 'white', // Set the button text color to white
    fontSize: 14,
    fontWeight: 'bold',
  },
  newsButton: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    backgroundColor: 'yellow', // Set the button background color for news
    paddingHorizontal: 10, // Add horizontal padding for spacing
    paddingVertical: 100, // Add vertical padding for spacing
    position: 'absolute',
    top: 300, // Position below the "Shop for products" button
    left: 20, // Adjust the left position for the button
    borderRadius: 5, // Add border radius for a rounded button
  },
  newsIcon: {
    marginRight: 5, // Add right margin for spacing
    color: 'black', // Set the news icon color to black
  },
  newsButtonText: {
    color: 'black', // Set the button text color to black
    fontSize: 14,
    fontWeight: 'bold',
  },
  balilihanButton: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    backgroundColor: 'lightblue', // Set the button background color
    paddingHorizontal: 70, // Add horizontal padding for spacing
    paddingVertical: 20, // Add vertical padding for spacing
    position: 'absolute',
    top: 200, // Position below the news button
    left: 20, // Adjust the left position for the button
    borderRadius: 5, // Add border radius for a rounded button
  },
  weatherIcon: {
    marginRight: 5, // Add right margin for spacing
    color: 'black', // Set the weather icon color to black
  },
  balilihanButtonText: {
    color: 'black', // Set the button text color to black
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc', // Set your desired border color
    borderRadius: 5,
    paddingHorizontal: 16,
    marginTop: 10, // Add top margin for spacing
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  searchButton: {
    padding: 10,
  },
  searchButtonText: {
    color: '#007AFF', // Set your desired button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  microphoneIcon: {
    marginLeft: 10, // Add left margin for spacing
  },
  cameraIcon: {
    marginLeft: 10, // Add left margin for spacing
  },
  smallIconContainer: {
    position: 'absolute',
    top: -50, // Adjust the top position to move the icon higher
    right: 5, // Adjust the right position to place it at the right corner
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align buttons to the right
    position: 'absolute',
    bottom: 10, // Adjust the bottom position for the button container
    right: 20, // Adjust the right position for the button container
  },
  bottomButton: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    backgroundColor: 'transparent', // Set button background color to transparent
    paddingHorizontal: 10, // Add horizontal padding for spacing
    paddingVertical: 5, // Add vertical padding for spacing
    marginLeft: 10, // Add left margin for spacing between buttons
  },
  bottomButtonIcon: {
    marginRight: 5, // Add right margin for spacing
    color: 'gray', // Set the button icon color
  },
  bottomButtonText: {
    color: 'gray', // Set the button text color
    fontSize: 14,
  },
});
