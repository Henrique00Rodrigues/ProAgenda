import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

export default function Tela_Manutencao_Agendamentos({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: '#FFF6B6' }}>
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
          backgroundColor: '#2dc75c',
          height: 50,
          borderTopColor: '#2dc75c',
          borderLeftColor: '#2dc75c',
          borderRightColor: '#2dc75c',
          borderWidth: 2,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TelaAdicionarAgendamento')}
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
            ADICIONAR NOVOS AGENDAMENTOS
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
          AGENDAMENTOS
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('TelaEdicaoAgendamento')}
        style={{
          backgroundColor: '#fff6b6',
          height: 70,
          borderTopColor: '#fff6b6',
          borderLeftColor: '#fff6b6',
          borderRightColor: '#fff6b6',
          borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <View
          style={{
            alignItems: 'start',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <TextInput
            style={{
              height: 30,
              width: 138,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="Herinque Rodrigues"
            editable={false}
            placeholderTextColor="gray"
          />
          <TextInput
            style={{
              height: 30,
              width: 80,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="Rua.xxxxxx"
            editable={false}
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <TextInput
            style={{
              height: 30,
              width: 77,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="08/11/2025"
            editable={false}
            placeholderTextColor="gray"
          />
          <TextInput
            style={{
              height: 30,
              width: 38,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="16:30"
            editable={false}
            placeholderTextColor="gray"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TelaEdicaoAgendamento')}
        style={{
          backgroundColor: '#fff6b6',
          height: 70,
          borderTopColor: '#fff6b6',
          borderLeftColor: '#fff6b6',
          borderRightColor: '#fff6b6',
          borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <View
          style={{
            alignItems: 'start',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <TextInput
            style={{
              height: 30,
              width: 138,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="Marcos Assunção"
            editable={false}
            placeholderTextColor="gray"
          />
          <TextInput
            style={{
              height: 30,
              width: 80,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="Rua.xxxxxx"
            editable={false}
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <TextInput
            style={{
              height: 30,
              width: 77,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="10/11/2025"
            editable={false}
            placeholderTextColor="gray"
          />
          <TextInput
            style={{
              height: 30,
              width: 38,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="17:45"
            editable={false}
            placeholderTextColor="gray"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TelaEdicaoAgendamento')}
        style={{
          backgroundColor: '#fff6b6',
          height: 70,
          borderTopColor: '#fff6b6',
          borderLeftColor: '#fff6b6',
          borderRightColor: '#fff6b6',
          borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <View
          style={{
            alignItems: 'start',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <TextInput
            style={{
              height: 30,
              width: 138,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="Juliana Silva"
            editable={false}
            placeholderTextColor="gray"
          />
          <TextInput
            style={{
              height: 30,
              width: 80,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="Rua.xxxxxx"
            editable={false}
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <TextInput
            style={{
              height: 30,
              width: 77,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="03/11/2025"
            editable={false}
            placeholderTextColor="gray"
          />
          <TextInput
            style={{
              height: 30,
              width: 38,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="16:30"
            editable={false}
            placeholderTextColor="gray"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TelaEdicaoAgendamento')}
        style={{
          backgroundColor: '#fff6b6',
          height: 70,
          borderTopColor: '#fff6b6',
          borderLeftColor: '#fff6b6',
          borderRightColor: '#fff6b6',
          borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <View
          style={{
            alignItems: 'start',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <TextInput
            style={{
              height: 30,
              width: 138,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="Pedro Henrique"
            editable={false}
            placeholderTextColor="gray"
          />
          <TextInput
            style={{
              height: 30,
              width: 80,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="Rua.xxxxxx"
            editable={false}
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <TextInput
            style={{
              height: 30,
              width: 77,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="08/11/2025"
            editable={false}
            placeholderTextColor="gray"
          />
          <TextInput
            style={{
              height: 30,
              width: 38,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="15:00"
            editable={false}
            placeholderTextColor="gray"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TelaEdicaoAgendamento')}
        style={{
          backgroundColor: '#fff6b6',
          height: 70,
          borderTopColor: '#fff6b6',
          borderLeftColor: '#fff6b6',
          borderRightColor: '#fff6b6',
          borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <View
          style={{
            alignItems: 'start',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <TextInput
            style={{
              height: 30,
              width: 138,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="Juliana Silva"
            editable={false}
            placeholderTextColor="gray"
          />
          <TextInput
            style={{
              height: 30,
              width: 80,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="Rua.xxxxxx"
            editable={false}
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <TextInput
            style={{
              height: 30,
              width: 77,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="18/12/2025"
            editable={false}
            placeholderTextColor="gray"
          />
          <TextInput
            style={{
              height: 30,
              width: 38,
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
            placeholder="12:30"
            editable={false}
            placeholderTextColor="gray"
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
