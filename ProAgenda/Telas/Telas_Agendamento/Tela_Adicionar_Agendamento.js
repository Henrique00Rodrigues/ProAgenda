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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
        <TouchableOpacity
          onPress={() => ''}
          style={{
            height: 30,
            width: 135,
            backgroundColor: '#6631d7',
            borderRadius: 50,
            marginEnd: 15,
            marginBottom: 0,
            justifyContent: 'center', //Não estava funcionando o alignItems, não sei o porque. Aí, coloquei o textAlign no <Text> abaixo, e funcionou. LOL :P
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              fontFamily: 'Arial',
              color: 'white',
              fontSize: 12,
            }}>
            ADICIONAR NOVO CLIENTE
          </Text>
        </TouchableOpacity>
      </View>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={() => ''}
          style={{
            height: 40,
            width: 135,
            backgroundColor: '#6631d7',
            borderRadius: 50, //Novamente, não funcionou o alignItems e o justifyContent
          }}>
          <Text style={{ textAlignVertical: 'center', textAlign: 'center', color: 'white' }}>SALVAR AGENDAMENTO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
