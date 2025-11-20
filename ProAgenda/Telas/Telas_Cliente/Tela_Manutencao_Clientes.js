import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

export default function Tela_Manutencao_Clientes({navigation}) {
  return (
    <ScrollView style={{backgroundColor: '#FFF6B6' }}>
      <View
        style={{
          backgroundColor: '#c6dcff',
          height: 70,
          borderTopColor: '#c6dcff',
          borderLeftColor: '#c6dcff',
          borderRightColor: '#c6dcff',
          borderWidth: 2,
        }}>
        <View
          style={{
            height: 50,
            marginTop: 10,
            marginBottom: 10,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
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
      <View
        style={{
          backgroundColor: '#659df2',
          height: 50,
          borderTopColor: '#659df2',
          borderLeftColor: '#659df2',
          borderRightColor: '#659df2',
          borderWidth: 2,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TelaAdicionarCliente')}
          style={{
            height: 30,
            width: 135,
            backgroundColor: '#6631D7',
            marginTop: 7.5,
            marginStart: 100,
            padding: 2,
            paddingStart: 20,
            borderRadius: 50,
          }}>
          <Text style={{ fontFamily: 'Arial', fontSize: 10, color: 'white' }}>
            ADICIONAR NOVOS CLIENTES
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#fff6b6',
          height: 70,
          borderTopColor: '#fff6b6',
          borderLeftColor: '#fff6b6',
          borderRightColor: '#fff6b6',
          borderWidth: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Arial',
            fontSize: 18,
            textDecorationLine: 'underline',
            fontWeight: 'bold',
          }}>
          CLIENTES
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#fff6b6',
          height: 70,
          borderTopColor: '#fff6b6',
          borderLeftColor: '#fff6b6',
          borderRightColor: '#fff6b6',
          borderWidth: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TextInput
          style={{
            height: 30,
            width: 138,
            borderWidth: 0,
            marginStart: 10,
            backgroundColor: 'white',
            fontWeight: 'bold',
          }}
          placeholder="Herinque Rodrigues"
          editable={false}
          placeholderTextColor="gray"
        />
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaPerfilCliente')}>
            <Image
              source={require('../../assets/icone-perfil.png')}
              style={{
                height: 40,
                width: 40,
                marginStart: 7,
                marginBottom: 5,
                backgroundColor: '#305bab',
                borderRadius: 100,
              }}
            />
            <TextInput
              style={{
                height: 15,
                width: 35,
                borderWidth: 0,
                marginStart: 10,
                backgroundColor: 'white',
                fontWeight: 'bold',
                marginEnd: 10,
              }}
              placeholder="Perfil"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff6b6',
          height: 70,
          borderTopColor: '#fff6b6',
          borderLeftColor: '#fff6b6',
          borderRightColor: '#fff6b6',
          borderWidth: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TextInput
          style={{
            height: 30,
            width: 138,
            borderWidth: 0,
            marginStart: 10,
            backgroundColor: 'white',
            fontWeight: 'bold',
          }}
          placeholder="Marcos"
          editable={false}
          placeholderTextColor="gray"
        />
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaPerfilCliente')}>
            <Image
              source={require('../../assets/icone-perfil.png')}
              style={{
                height: 40,
                width: 40,
                marginStart: 7,
                marginBottom: 5,
                backgroundColor: '#305bab',
                borderRadius: 100,
              }}
            />
            <TextInput
              style={{
                height: 15,
                width: 35,
                borderWidth: 0,
                marginStart: 10,
                backgroundColor: 'white',
                fontWeight: 'bold',
                marginEnd: 10,
              }}
              placeholder="Perfil"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff6b6',
          height: 70,
          borderTopColor: '#fff6b6',
          borderLeftColor: '#fff6b6',
          borderRightColor: '#fff6b6',
          borderWidth: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TextInput
          style={{
            height: 30,
            width: 138,
            borderWidth: 0,
            marginStart: 10,
            backgroundColor: 'white',
            fontWeight: 'bold',
          }}
          placeholder="Juliana"
          editable={false}
          placeholderTextColor="gray"
        />
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaPerfilCliente')}>
            <Image
              source={require('../../assets/icone-perfil.png')}
              style={{
                height: 40,
                width: 40,
                marginStart: 7,
                marginBottom: 5,
                backgroundColor: '#305bab',
                borderRadius: 100,
              }}
            />
            <TextInput
              style={{
                height: 15,
                width: 35,
                borderWidth: 0,
                marginStart: 10,
                backgroundColor: 'white',
                fontWeight: 'bold',
                marginEnd: 10,
              }}
              placeholder="Perfil"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff6b6',
          height: 70,
          borderTopColor: '#fff6b6',
          borderLeftColor: '#fff6b6',
          borderRightColor: '#fff6b6',
          borderWidth: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TextInput
          style={{
            height: 30,
            width: 138,
            borderWidth: 0,
            marginStart: 10,
            backgroundColor: 'white',
            fontWeight: 'bold',
          }}
          placeholder="Natália"
          editable={false}
          placeholderTextColor="gray"
        />
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaPerfilCliente')}>
            <Image
              source={require('../../assets/icone-perfil.png')}
              style={{
                height: 40,
                width: 40,
                marginStart: 7,
                marginBottom: 5,
                backgroundColor: '#305bab',
                borderRadius: 100,
              }}
            />
            <TextInput
              style={{
                height: 15,
                width: 35,
                borderWidth: 0,
                marginStart: 10,
                backgroundColor: 'white',
                fontWeight: 'bold',
                marginEnd: 10,
              }}
              placeholder="Perfil"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff6b6',
          height: 70,
          borderTopColor: '#fff6b6',
          borderLeftColor: '#fff6b6',
          borderRightColor: '#fff6b6',
          borderWidth: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TextInput
          style={{
            height: 30,
            width: 138,
            borderWidth: 0,
            marginStart: 10,
            backgroundColor: 'white',
            fontWeight: 'bold',
          }}
          placeholder="Davi"
          editable={false}
          placeholderTextColor="gray"
        />
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaPerfilCliente')}>
            <Image
              source={require('../../assets/icone-perfil.png')}
              style={{
                height: 40,
                width: 40,
                marginStart: 7,
                marginBottom: 5,
                backgroundColor: '#305bab',
                borderRadius: 100,
              }}
            />
            <TextInput
              style={{
                height: 15,
                width: 35,
                borderWidth: 0,
                marginStart: 10,
                backgroundColor: 'white',
                fontWeight: 'bold',
                marginEnd: 10,
              }}
              placeholder="Perfil"
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
