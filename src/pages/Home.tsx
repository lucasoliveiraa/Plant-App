import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialIcons';

import plant1 from '../assets/plant_1.jpeg';
import plant2 from '../assets/plant_2.jpg';
import plant3 from '../assets/plant_3.jpg';
import plant4 from '../assets/plant_4.jpg';
import plant5 from '../assets/plant_5.jpg';
import plant6 from '../assets/plant_6.jpg';
import plant7 from '../assets/plant_7.jpg';
import profile1 from '../assets/profile_1.jpg';
import profile2 from '../assets/profile_2.jpg';
import profile3 from '../assets/profile_3.jpg';
import profile4 from '../assets/profile_4.jpg';
import profile5 from '../assets/profile_5.jpg';

const { width } = Dimensions.get("window");

const Home = ({ navigation }) => {

  const [newPlants, setNewPlants] = useState([
    {
      id: 0,
      name: "Plant 1",
      img: plant1,
      favourite: false,
    },
    {
      id: 1,
      name: "Plant 2",
      img: plant2,
      favourite: false,
    },
    {
      id: 2,
      name: "Plant 3",
      img: plant3,
      favourite: true,
    },
    {
      id: 3,
      name: "Plant 4",
      img: plant4,
      favourite: false,
    },
  ]);

  const [friendList, setFriendList] = useState([
    {
      id: 0,
      img: profile1,
    },
    {
      id: 1,
      img: profile2,
    },
    {
      id: 2,
      img: profile3,
    },
    {
      id: 3,
      img: profile4,
    },
    {
      id: 4,
      img: profile5,
    },
  ]);

  function renderNewPlants(item, index) {
    return(
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 8,
        }}
      >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: width * 0.23,
            height: "82%",
            borderRadius: 15,
          }}
        />

        <View
          style={{
            position: "absolute",
            bottom: "17%",
            right: 0,
            backgroundColor: '#00996D',
            paddingHorizontal: 8,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Text
            style={{
              color: '#ffffff',
              fontFamily: 'Roboto-Regular',
              fontSize: 14,
              lineHeight: 22,
            }}
          >
            {item.name}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '15%',
            left: 7,
          }}
          onPress={() => { console.log("Favourite On Pressed") }}
        >
          {item.favourite ?
            <IconM
              name="favorite"
              size={20}
              color='#f50808'
            /> :
            <Icon
              name="heart"
              size={20}
              color='#606d87'
            />
          }
        </TouchableOpacity>
      </View>
    );
  }

  function renderFriendsComponent() {
    if (friendList.length == 0) {
      return (
        <View></View>
      );
    } else if (friendList.length <= 3) {
      return (
        friendList.map((item, index) => (
          <View
            key={`friend-${index}`}
            style={index == 0 ? {} : { marginLeft: -20 }}
          >
            <Image
              source={item.img}
              resizeMode="cover"
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                borderWidth: 3,
                borderColor: '#00996D'
              }}
            />
          </View>
        ))
      )
    } else {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {friendList.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={`friend-${index}`}
                  style={index == 0 ? {} : { marginLeft: -20 }}
                >
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: '#00996D'
                    }}
                  />
                </View>
              )
            }
          })}

          <Text style={{ marginLeft: 5, color: '#606d87', fontFamily: 'Roboto-Regular', fontSize: 16, lineHeight: 22 }}>
            +{friendList.length - 3} More
          </Text>
        </View>
      )
    }
  }

  return(
    <View style={styles.container}>

      <View style={{ height: "30%", backgroundColor: '#FFFFFF' }} >
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#00996D'
          }}
        >
          <View style={{
            marginTop: 16,
            marginHorizontal: 24,
          }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{
                  color: '#ffffff',
                  fontFamily: "Roboto-Bold",
                  lineHeight: 30,
                  fontSize: 22,
                }}
              >
                New Plants
              </Text>
              <TouchableOpacity
                onPress={() => { console.log("Focus on password") }}
              >
                <Icon
                  name="maximize"
                  size={20}
                  style={{
                    color: '#ffffff'
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 0 }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => renderNewPlants(item, index)}
              />
            </View>

          </View>
        </View>
      </View>

      <View style={{ height: "47%", backgroundColor: '#eff2f5' }} >
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#ffffff'
          }}
        >
          <View
            style={{
              marginTop: 8,
              marginHorizontal: 24,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{
                  color: '#606d87',
                  fontFamily: 'Roboto-Bold',
                  fontSize: 22,
                  lineHeight: 30
                }}
              >
                Today's Share
              </Text>
              <TouchableOpacity
                onPress={() => {console.log("See All on pressed")}}
              >
                <Text
                  style={{
                    color: '#606d87',
                    fontFamily: 'Roboto-Regular',
                    fontSize: 16,
                    lineHeight: 22
                  }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: "85%",
                marginTop: 8
              }}
            >
              <View style={{ flex: 1}}>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => { navigation.navigate("PlantDetail") }}
                >
                  <Image
                    source={plant5}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20
                    }}
                  />

                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flex: 1, marginTop: 8 }}
                  onPress={() => { navigation.navigate("PlantDetail") }}
                >
                  <Image
                    source={plant6}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20
                    }}
                  />

                </TouchableOpacity>
              </View>

              <View style={{ flex: 1.3}}>
                <TouchableOpacity
                  style={{ flex: 1, marginLeft: 14 }}
                  onPress={() => { navigation.navigate("PlantDetail") }}
                >
                  <Image
                    source={plant7}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{ height: "23%", backgroundColor: '#eff2f5' }} >
        <View style={{ flex: 1, backgroundColor: '#eff2f5' }}>
          <View style={{ marginTop: 4, marginHorizontal: 24 }}>
            <Text
              style={{
                color: '#606d87',
                fontFamily: 'Roboto-Bold',
                fontSize: 22,
                lineHeight: 30
              }}
            >
              Added Friends
            </Text>
            <Text
              style={{
                color: '#606d87',
                fontFamily: 'Roboto-Regular',
                fontSize: 16,
                lineHeight: 22
              }}
            >
              5 total
            </Text>

            <View style={{ flexDirection: 'row', height: '60%' }}>
              <View style={{ flex: 1.3, flexDirection: 'row', alignItems: 'center' }}>
                {renderFriendsComponent()}
              </View>

              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Text style={{ color: '#606d87', fontSize: 16, fontFamily: 'Roboto-Regular', lineHeight: 22  }}>
                  Add new
                </Text>
                <TouchableOpacity
                  style={{
                    marginLeft: 8,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#BEC1D2'
                  }}
                  onPress={() => { console.log("Add friend on pressed")}}
                >
                  <Icon
                    name="plus"
                    size={25}
                    color='#00996D'
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;
