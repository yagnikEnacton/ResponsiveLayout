import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
const {height, width} = Dimensions.get('window');
console.log('height', height);
console.log('width', width);
console.log('wp', wp('100%'));
console.log('hp', hp('100%'));
const Layout = () => {
  console.log('inside layout component');
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <Button title="click me"></Button>

      {/* Body */}
      <View style={styles.body}>
        <View style={styles.section1}>
          <Text style={styles.sectionText}>Section 1</Text>
        </View>
        <View style={styles.section2}>
          <Text style={styles.sectionText}>Section 2</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    // height: hp('100%'),
    flex: 1,
  },
  header: {
    // height: hp('20%'),
    flex: 0.2,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    // height: hp('60%'),
    flex: 0.6,
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
  },
  section1: {
    backgroundColor: '#ddd',
    // width: wp('50%'),
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section2: {
    // width: wp('50%'),
    flex: 0.5,
    backgroundColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 16,
  },
  footer: {
    // height: hp('20%'),
    flex: 0.2,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
