import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import Banner from '../assets/banner_bg.jpg';

const RequirementBar = ({ icon, barPercentage }) => {
  return (
    <View style={{ height: 60, alignItems: 'center' }}>
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#BEC1D2',
        }}
      >
        <Icon
          name={icon}
          size={25}
          color= '#606d87'
        />
      </View>

      {/* Bar */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 3,
          marginTop: 8,
          backgroundColor: '#BEC1D2'
        }}
      ></View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: barPercentage,
          height: 3,
          marginTop: 8,
          backgroundColor: '#00996D'
        }}
      ></View>
    </View>
  );
}

const RequirementDetail = ({ icon, label, detail }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} >
        <Icon
          name={icon}
          size={25}
          color= '#606d87'
        />

        <Text style={{ marginLeft: 8, fontSize: 22, fontFamily:'Roboto-Black', lineHeight: 30, color: '#606d87' }}>{label}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={{ marginLeft: 8, fontSize: 22, fontFamily:'Roboto-Bold', lineHeight: 30, color: '#BEC1D2' }}>{detail}</Text>
      </View>
    </View>
  );
}

const PlantDetail = ({ navigation }) => {

  // Render

  function renderHeader() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 24,
          right: 24
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.5)' }}
              onPress={() => {navigation.navigate("Home")}}
            >
              <Icon
                name="chevron-left"
                color='#ffffff'
                size={25}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
            onPress={() => { console.log("Focus on pressed") }}
          >
            <Icon
              name="maximize"
              size={25}
              color='#ffffff'
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: "10%" }} >
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#ffffff', fontSize: 30, fontFamily: "Roboto-Black", lineHeight: 30 }}>Glory Mantas</Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>

      </View>
    );
  }

  function renderRequirementsBar() {
    return (
      <View style={{ flexDirection: 'row', marginTop: 24, paddingHorizontal: 24, justifyContent: 'space-between' }}>
        <RequirementBar
          icon='sun'
          barPercentage="50%"
        />
        <RequirementBar
          icon='droplet'
          barPercentage="25%"
        />
        <RequirementBar
          icon='thermometer'
          barPercentage="80%"
        />
        <RequirementBar
          icon='wind'
          barPercentage="30%"
        />
        <RequirementBar
          icon='battery-charging'
          barPercentage="50%"
        />
      </View>
    );
  }

  function renderRequirements() {
    return (
      <View
      style={{
        flex: 2.5,
        marginTop: 24,
        paddingHorizontal: 24,
        justifyContent: 'space-around'
      }}
      >
        <RequirementDetail
          icon='sun'
          label="Sunlight"
          detail="15ºC"
        />
        <RequirementDetail
          icon='droplet'
          label="Water"
          detail="250 ML Daily"
        />
        <RequirementDetail
          icon='thermometer'
          label="Room Temp"
          detail="25ºC"
        />
        <RequirementDetail
          icon='wind'
          label="Soil"
          detail="3 Kg"
        />
        <RequirementDetail
          icon='battery-charging'
          label="Fertilizer"
          detail="150 Mg"
        />

      </View>
    );
  }

  function renderFooter() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 24 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: 16,
            alignItems: 'center',
            justifyContent: 'center',
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: '#00996D'
          }}
          onPress={() => { console.log("Take Action") }}
        >
          <Text style={{ color: '#ffffff', fontSize: 22, fontFamily:'Roboto-Bold', lineHeight: 30 }}>
            Take Action
          </Text>
          <Icon
            name="chevron-right"
            size={20}
            color='#ffffff'
            style={{ marginLeft: 16 }}
          />
        </TouchableOpacity>

        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'center', paddingHorizontal: 24 }} >
          <Text style={{ flex: 1, color: '#606d87', fontSize: 16, fontFamily:'Roboto-Bold', lineHeight: 20 }}>
            Almost 2 weeks of growing time
          </Text>
          <Icon
            name="arrow-down"
            size={20}
            color='#606d87'
            style={{ marginLeft: 8 }}
          />
        </View>
      </View>
    );
  }

  return(
    <View style={styles.container}>
      {/* Banner Photo */}
      <View style={{ height: "35%" }}>
        <Image
          source={Banner}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </View>

        {/* Requirements */}
      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: '#eff2f5',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: 24
        }}
      >
        <Text
          style={{
            paddingHorizontal: 24,
            color: '#606d87',
            fontSize: 30,
            fontFamily: 'Roboto-Black',
            lineHeight: 36
          }}
        >
          Requirements
        </Text>

        {renderRequirementsBar()}

        {renderRequirements()}

        {renderFooter()}
      </View>
      {renderHeader()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
});


export default PlantDetail;
