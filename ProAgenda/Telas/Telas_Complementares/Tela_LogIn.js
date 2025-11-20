import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

export default function App() {
  return (
    <ScrollView
      style={{ backgroundColor: '#FFF6B6' }}
      contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ backgroundColor: '#c6dcff', height: 70 }}>
        <View
          style={{
            height: 50,
            marginTop: 10,
            marginBottom: 10,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => ''}>
            <Image
              source={require('./assets/Icone_proagenda.png')}
              style={{
                height: 50,
                width: 50,
                marginStart: 10,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
          <View style={{ height: 50, width: 190, marginStart: 10 }}>
            <Text style={{ fontFamily: 'Arial', marginTop: 5 }}>
              Agedamento de serviços para profissionais autônomos
            </Text>
          </View>
        </View>
      </View>
      <Text style={{ fontFamily: 'Arial', fontSize: 25, margin: 15 }}>
        Email:
      </Text>
      <TextInput
        style={{
          height: 30,
          width: 138,
          borderWidth: 0,
          borderRadius: 10,
          marginStart: 15,
          backgroundColor: 'white',
          fontWeight: 'bold',
        }}
        placeholder=""
        editable={true}
        placeholderTextColor="gray"
      />
      <Text style={{ fontFamily: 'Arial', fontSize: 25, margin: 15 }}>
        Senha:
      </Text>
      <TextInput
        style={{
          height: 30,
          width: 138,
          borderWidth: 0,
          borderRadius: 10,
          marginStart: 15,
          backgroundColor: 'white',
          fontWeight: 'bold',
        }}
        placeholder=""
        editable={true}
        placeholderTextColor="gray"
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => ''}
          style={{
            height: 40,
            width: 135,
            backgroundColor: '#6631d7',
            borderRadius: 50,
            marginTop: 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Arial',
              color: 'white'
            }}>
            ENVIAR
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
