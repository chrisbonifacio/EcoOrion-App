import React, {useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getBooks} from '../redux/actions';
function DetailsScreen() {
  const dispatch = useDispatch();

  const fetchBooks = () => dispatch(getBooks());

  useEffect(() => {
    fetchBooks();
  }, []);

  const {books} = useSelector(state => state.booksReducer);
  const renderItem = ({item}) => {
    return (
      <View style={{marginVertical: 12}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          {/* Book Cover */}
          <Image
            source={{uri: item.image_url}}
            resizeMode="cover"
            style={{width: 100, height: 150, borderRadius: 10}}
          />
          {/* Book Metadata */}
          <View style={{flex: 1, marginLeft: 12}}>
            {/* Book Title */}
            <View>
              <Text style={{fontSize: 22, paddingRight: 16, color: 'white'}}>
                {item.title}
              </Text>
            </View>
            {/* Meta info */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, paddingLeft: 10, color: '#64676D'}}>
                {item.num_pages}
              </Text>
              <Text style={{fontSize: 14, paddingLeft: 10, color: '#64676D'}}>
                {item.rating}
              </Text>
            </View>
            {/* Buttons */}
            <View style={{marginTop: 14}}>
              <TouchableOpacity
                onPress={() => console.log('Bookmarked!')}
                activeOpacity={0.7}
                style={{
                  flexDirection: 'row',
                  padding: 2,
                  backgroundColor: '#2D3038',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 40,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1E1B26'}}>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{color: 'white', fontSize: 22}}>Bestsellers</Text>
        <View style={{flex: 1, marginTop: 8}}>
          <FlatList
            data={books}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DetailsScreen;
