
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

export default function CustomHeader({
  title,
  filter,
  scan,
  notification,
  bgColor,
  back,
  profile,
}) {
  const pointsTo = useNavigation();
  return (
    <View style={[styles.headerContainer, {backgroundColor: bgColor}]}>
      <View style={{flex: 2}}>
        {back && (
          <AntIcon
            name={'left'}
            size={18}
            color={'#ffffff'}
            onPress={() => pointsTo.goBack()}
            style={styles.headBackbtn}
          />
        )}
        {profile && (
          <TouchableOpacity onPress={() => pointsTo.navigate('Profile')}>
            <Image
              source={require('../Assets/Images/Search.png')}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        )}
      </View>
      <Text
        style={[
          styles.headText,
          {flex: 5, marginBottom: Platform.OS === 'ios' ? 0 : -3},
        ]}>
        {title}
      </Text>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          columnGap: 14,
        }}>
        {filter && (
          <TouchableOpacity onPress={filter}>
            <Image
              source={require('../Assets/Images/Search.png')}
              resizeMode="contain"
              style={{width: 22, height: 22}}
            />
          </TouchableOpacity>
        )}
        {notification && (
          <TouchableOpacity onPress={() => pointsTo.navigate('Notification')}>
            <Image
              source={require('../Assets/Images/Notification.png')}
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        )}
        {scan && (
          <TouchableOpacity onPress={() => pointsTo.navigate('Scanner')}>
            <Image
              source={require('../Assets/Images/Profile.png')}
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headBackbtn: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 8,
    textAlign: 'center',
    width: width * 0.09,
    paddingVertical: 8,
    overflow: 'hidden',
  },
  headIconRest: {
    textAlign: 'right',
    flex: 3.3,
  },
  headText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Poppins-SemiBold',
  },
  headerContainer: {
    flexDirection: 'row',
    // paddingHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 12,
  },
});