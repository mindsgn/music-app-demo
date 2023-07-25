import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import {APIAction} from '../../redux/actions';
import {connect} from 'react-redux';

const Header = (props: any) => {
  const {search, getRandom} = APIAction(props);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    if (searchText === '') {
      getRandom();
    } else {
      search(searchText);
    }
  }, [searchText]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={'white'}
        onChangeText={value => {
          setSearchText(value);
        }}
        style={{
          flex: 1,
          color: 'white',
        }}
      />
    </View>
  );
};

const mapStateToProps = () => {
  return null;
};

export default connect(mapStateToProps)(Header);
