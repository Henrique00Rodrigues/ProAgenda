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
              source={require('../../assets/Icone_proagenda.png')}
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
        Cliente
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
        placeholder="André Matias"
        editable={true}
        placeholderTextColor="gray"
      />
      <Text style={{ fontFamily: 'Arial', fontSize: 25, margin: 15 }}>
        Data e Hora do Agedamento
      </Text>
      <View style={{ flexDirection: 'row' }}>
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
          placeholder="XX/XX/XXXX"
          editable={true}
          placeholderTextColor="gray"
        />
        <TextInput
          style={{
            height: 30,
            width: 50,
            borderWidth: 0,
            borderRadius: 10,
            marginStart: 30,
            backgroundColor: 'white',
            fontWeight: 'bold',
          }}
          placeholder="XX:XX"
          editable={true}
          placeholderTextColor="gray"
        />
      </View>
      <Text style={{ fontFamily: 'Arial', fontSize: 25, margin: 15 }}>
        Endereço do Cliente
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
        placeholder="xxxxxxxxxxxxxxxxx"
        editable={true}
        placeholderTextColor="gray"
      />
      <View
        style={{
          marginTop: 15,
          marginBottom: 15,
          height: 60,
          borderWidth: 2,
          borderRightColor: '#fff6b6',
          borderLeftColor: '#fff6b6',
          justifyContent: 'center',
          alignItems: 'end',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            height: 40,
            width: 150,
            marginEnd: 15,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontFamily: 'Arial', color: '#fff6b6' }}>
            REMOVER VAGA
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
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
            marginEnd: 15,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Arial',
              color: 'white',
              textAlign: 'center',
            }}>
            SALVAR ALTERAÇÕES
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => ''}
          style={{
            height: 40,
            width: 135,
            backgroundColor: '#6631d7',
            borderRadius: 50,
            marginEnd: 15,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Arial',
              color: 'white',
              textAlign: 'center',
            }}>
            CANCELAR
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
