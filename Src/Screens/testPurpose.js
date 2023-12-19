import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import Colors from '../Assets/Theme/Theme';

const data = [
  {
    id: 1,
    upImage: require('../Assets/Images/arrow-up.png'),
    DownImage: require('../Assets/Images/down-arrow.png'),
    leftImage: require('../Assets/Images/left.png'),
    text: 'WRC CHALANGES',
    text1: 'WRC Innovation Contest',
    text2: 'WRC RoboSoccer',
    text3: 'WRC BotsCombat',
    text4: 'WRC RoboRace',
    text5: 'WRC Fast Line Follower',
    text6: 'WRC Water Rocket',
    text7: 'WRC Water Maze Solver',
    text8: 'WRC Rc Craft',
    text9: 'Sumo Bots',
    text10: 'Drone Soccer',
    text11: 'Drone Racing(FPV)',
    text12: 'Rc Car Racing',
    text13: 'Robo Hockey',

  },
  {
    id: 2,
    upImage: require('../Assets/Images/arrow-up.png'),
    DownImage: require('../Assets/Images/down-arrow.png'),
    leftImage: require('../Assets/Images/left.png'),
    text: 'COMMUNITY',
    text1: 'TX Referee',
    text2: 'WRC Winner 2023',
    text3: 'WRC Winner 2022',
    text4: 'TX RoboClub',
    text5: 'TX WRC Team',
    text6: 'Corporet RoboClub',
    text7: 'RoboClub Login',
    text8: 'International Committee',
    text9: 'Voluenter',

  },
  {
    id: 3,
    upImage: require('../Assets/Images/arrow-up.png'),
    DownImage: require('../Assets/Images/down-arrow.png'),
    leftImage: require('../Assets/Images/left.png'),
    text: 'MEMBERSHIP',
    text1: 'Technoxian',
    text2: 'Texhnoxian',
    text3: 'TexHnoxian',
  },
  {
    id: 4,
    upImage: require('../Assets/Images/arrow-up.png'),
    DownImage: require('../Assets/Images/down-arrow.png'),
    leftImage: require('../Assets/Images/left.png'),
    text: 'GALLERY',
    text1: 'Gallery',
   
  },
  {
    id: 5,
    upImage: require('../Assets/Images/arrow-up.png'),
    DownImage: require('../Assets/Images/down-arrow.png'),
    leftImage: require('../Assets/Images/left.png'),
    text: 'MORE',
    text1: 'News',
    text2: 'Store',
  
  },
  
];

const TestPurpose = () => {
  const [downStates, setDownStates] = useState(data.reduce((acc, item) => ({ ...acc, [item.id]: true }), {}));

  const handleDown = (itemId) => {
    setDownStates(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center',marginTop:10 }}>
          <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{item.text}</Text>
          <TouchableOpacity onPress={() => handleDown(item.id)}>
            <Image
              source={downStates[item.id] ? item.upImage : item.DownImage}
              style={{ height: 20, width: 20}} tintColor={'white'}
            />
          </TouchableOpacity>
        </View>
        {downStates[item.id] ? null : (
          <View >
            {item.text1 && (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginTop:10}}>
                <Text style={{color:'white',fontSize:18}}>{item.text1}</Text>
                <TouchableOpacity>
                  <Image source={item.leftImage} style={{ height: 20, width: 20 }} tintColor={'white'} />
                </TouchableOpacity>
              </View>
            )}
            {item.text2 && (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginTop:10}}>
                <Text style={{color:'white',fontSize:18}}>{item.text2}</Text>
                <TouchableOpacity>
                  <Image source={item.leftImage} style={{ height: 20, width: 20 }} tintColor={'white'} />
                </TouchableOpacity>
              </View>
            )}
            {item.text3 && (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:10 }}>
                <Text style={{color:'white',fontSize:18}}>{item.text3}</Text>
                <TouchableOpacity>
                  <Image source={item.leftImage} style={{ height: 20, width: 20 }}  tintColor={'white'}/>
                </TouchableOpacity>
              </View>
            )}
            {item.text4 && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:10 }}>
              <Text style={{color:'white',fontSize:18}}>{item.text4}</Text>
              <TouchableOpacity>
                <Image source={item.leftImage} style={{ height: 20, width: 20 }} tintColor={'white'} />
              </TouchableOpacity>
            </View>
          )}
            {item.text5 && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginTop:10}}>
              <Text style={{color:'white',fontSize:18}}>{item.text5}</Text>
              <TouchableOpacity>
                <Image source={item.leftImage} style={{ height: 20, width: 20 }}  tintColor={'white'}/>
              </TouchableOpacity>
            </View>
          )}
            {item.text6 && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginTop:10}}>
              <Text style={{color:'white',fontSize:18}}>{item.text6}</Text>
              <TouchableOpacity>
                <Image source={item.leftImage} style={{ height: 20, width: 20 }} tintColor={'white'} />
              </TouchableOpacity>
            </View>
          )}
            {item.text7 && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:10 }}>
              <Text style={{color:'white',fontSize:18}}>{item.text7}</Text>
              <TouchableOpacity>
                <Image source={item.leftImage} style={{ height: 20, width: 20 }} tintColor={'white'} />
              </TouchableOpacity>
            </View>
          )}
            {item.text8 && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginTop:10 }}>
              <Text style={{color:'white',fontSize:18}}>{item.text8}</Text>
              <TouchableOpacity>
                <Image source={item.leftImage} style={{ height: 20, width: 20 }} tintColor={'white'} />
              </TouchableOpacity>
            </View>
          )}
            {item.text9 && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:10  }}>
              <Text style={{color:'white',fontSize:18}}>{item.text9}</Text>
              <TouchableOpacity>
                <Image source={item.leftImage} style={{ height: 20, width: 20 }} tintColor={'white'}/>
              </TouchableOpacity>
            </View>
          )}
           {item.text10 && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginTop:10 }}>
              <Text style={{color:'white',fontSize:18}}>{item.text10}</Text>
              <TouchableOpacity>
                <Image source={item.leftImage} style={{ height: 20, width: 20 }}  tintColor={'white'}/>
              </TouchableOpacity>
            </View>
          )}
            {item.text11 && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginTop:10 }}>
              <Text style={{color:'white',fontSize:18}}>{item.text11}</Text>
              <TouchableOpacity>
                <Image source={item.leftImage} style={{ height: 20, width: 20 }} tintColor={'white'}/>
              </TouchableOpacity>
            </View>
          )}
            {item.text12 && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginTop:10 }}>
              <Text style={{color:'white',fontSize:18}}>{item.text12}</Text>
              <TouchableOpacity>
                <Image source={item.leftImage} style={{ height: 20, width: 20 }} tintColor={'white'} />
              </TouchableOpacity>
            </View>
          )}
            {item.text13 && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:10  }}>
              <Text style={{color:'white',fontSize:18}}>{item.text13}</Text>
              <TouchableOpacity>
                <Image source={item.leftImage} style={{ height: 20, width: 20 }} tintColor={'white'} />
              </TouchableOpacity>
            </View>
          )}

          </View>
        )}
      </View>
    );
  };

  return (
    <View style={{paddingHorizontal:15,backgroundColor:Colors.black,flex:1}}>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TestPurpose;
