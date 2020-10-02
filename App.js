import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
            <Image
              style={styles.menu}
              source={{
                uri:
                  'https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.theader}> SanMu ComiCast </Text>
        </View>
        <ScrollView>
          <View style={styles.week}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Weekly Top</Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
                <View style={styles.row1}>
                  <Image
                    style={styles.logo}
                    source={require('./src/asset/logo/kid.png')}
                  />
                  <Text style={styles.judul}>Kaito Kid</Text>
                  <Text style={styles.Viewer}>12.2k View</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
                <View style={styles.row1}>
                  <Image
                    style={styles.logo}
                    source={require('./src/asset/logo/snk.png')}
                  />
                  <Text style={styles.judul}>Shingeki</Text>
                  <Text style={styles.Viewer}>3.4k View</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
                <View style={styles.row1}>
                  <Image
                    style={styles.logo}
                    source={require('./src/asset/logo/fa.png')}
                  />
                  <Text style={styles.judul}>Fairy Tail</Text>
                  <Text style={styles.Viewer}>1.8k View</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
                <View style={styles.row1}>
                  <Image
                    style={styles.logo}
                    source={require('./src/asset/logo/nnt.png')}
                  />
                  <Text style={styles.judul}>Nanatsu</Text>
                  <Text style={styles.Viewer}>1.2k View</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
                <View style={styles.row1}>
                  <Image
                    style={styles.logo}
                    source={require('./src/asset/logo/st.png')}
                  />
                  <Text style={styles.judul}>Saber tooth</Text>
                  <Text style={styles.Viewer}>873 View</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View>
            <Text style={styles.adikasuh}>Dukung Creator</Text>
          </View>
          <View style={styles.rowbodi}>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto}
                  source={require('./src/asset/foto/dazai.png')}
                />
                <Text>Dazai osamu</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto2}
                  source={require('./src/asset/logo/donate.png')}
                />
                <Text>Donate For Support</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto2}
                  source={require('./src/asset/logo/follow.png')}
                />
                <Text>Follow</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowbodi}>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto}
                  source={require('./src/asset/foto/sora.png')}
                />
                <Text>Sora comic</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto2}
                  source={require('./src/asset/logo/donate.png')}
                />
                <Text>Donate For Support</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto2}
                  source={require('./src/asset/logo/follow.png')}
                />
                <Text>Follow</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowbodi}>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto}
                  source={require('./src/asset/foto/luffy.jpg')}
                />
                <Text>luffy32</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto2}
                  source={require('./src/asset/logo/donate.png')}
                />
                <Text>Donate For Support</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto2}
                  source={require('./src/asset/logo/follow.png')}
                />
                <Text>Follow</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowbodi}>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto}
                  source={require('./src/asset/foto/kazu.jpeg')}
                />
                <Text>lord kazuma</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto2}
                  source={require('./src/asset/logo/donate.png')}
                />
                <Text>Donate For Support</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto2}
                  source={require('./src/asset/logo/follow.png')}
                />
                <Text>Follow</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowbodi}>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto}
                  source={require('./src/asset/foto/ranpo.png')}
                />
                <Text>edogawa ranpo</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto2}
                  source={require('./src/asset/logo/donate.png')}
                />
                <Text>Donate For Support</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2}>
                <Image
                  style={styles.foto2}
                  source={require('./src/asset/logo/follow.png')}
                />
                <Text>Follow</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowbodi}>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2b}>
                <Image
                  style={styles.foto}
                  source={require('./src/asset/foto/mori.png')}
                />
                <Text>moriii</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2b}>
                <Image
                  style={styles.foto2}
                  source={require('./src/asset/logo/donate.png')}
                />
                <Text>Donate For Support</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('belum ada apa apa')}>
              <View style={styles.row2b}>
                <Image
                  style={styles.foto2}
                  source={require('./src/asset/logo/follow.png')}
                />
                <Text>Follow</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#5eaaa8',
    alignItems: 'center',
  },
  menu: {height: 40, width: 35, marginTop: 4},
  theader: {
    fontSize: 22,
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  row: {justifyContent: 'center', flex: 1, flexDirection: 'row'},
  row1: {
    width: 115,
    height: 115,
    borderRadius: 7,
    margin: 5,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowbodi: {
    marginTop: 20,
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  row2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 125,
    height: 100,
    backgroundColor: 'skyblue',
  },
  row2b: {
    marginBottom: 60,
    width: 125,
    height: 100,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adikasuh: {fontWeight: 'bold', fontSize: 25, marginTop: 10},
  logo: {width: 50, height: 56},
  judul: {fontWeight: 'bold', fontSize: 16},
  week: {alignItems: 'center', fontWeight: 'bold'},
  foto: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  foto2: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
});
