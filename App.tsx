import React,{useState} from "react";
import { Text, View, SafeAreaView, Image , Switch ,StyleSheet, ScrollView } from "react-native";
import den from './img/bong-den1.png';
import den2 from './img/bong-den2.png';
import alo from './img/alo.png';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView>
      <View style={{width: '100%', height: '100%'}}>
        <View style={{width: '100%', height: 30, borderWidth: 1}}></View>
        <View
          style={{
            width: '100%',
            height: 30,
            borderWidth: 1,
            backgroundColor: '#00FFFF',
          }}>
          <Text style={{textAlign: 'center'}}>APP WIFI</Text>
        </View>
        <View style={{width: '100%', height: 30, borderWidth: 1}}></View>

        <View
          style={{
            borderWidth: 1,
            width: '100%',
            height: 350,
            justifyContent: 'center',
            alignItems: 'center',
          }}>

            {isEnabled ? <Image source={den} style={{width: '60%', height: 310}} /> :  <Image source={den2} style={{width: '60%', height: 350}} />}
           
         
        </View>
        <View style={{width: '100%', height: 30, borderWidth: 1}}>
          <Text style={{textAlign: 'center', alignItems: 'center'}}>
            Trạng thái đèn
          </Text>
        </View>
          <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={{width: '100%', height: 70,}}></View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
         
            width: '50%',
            height: 160,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        
          <Image source={alo} style={{width: '100%', height: 140}} />
       
        </View>
         <View
          style={{
          
            width: '50%',
            height: 160,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{textAlign: 'center'}}>Nhiet do la: </Text>
          <Text style={{textAlign: 'center', marginTop: 20, fontSize: 30 , fontWeight: 'bold'}}> 35 </Text>
        </View>
        </View>
      </View>

     
    
    </ScrollView>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;