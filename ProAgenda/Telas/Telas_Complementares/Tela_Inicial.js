import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';



export default function Tela_Inicial({navigation}) {
  return (
    <ScrollView style={{backgroundColor: '#FFF6B6'}}>
      
        <View style={{ backgroundColor: '#c6dcff', height: 70 }}>
          <View
            style={{
              height: 50,
              marginTop: 10,
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../assets/Icone_proagenda.png')}
              style={{
                height: 50,
                width: 50,
                marginStart: 10,
                borderRadius: 100,
              }}
            />
            <View style={{ height: 50, width: 190, marginStart: 10 }}>
              <Text style={{ fontFamily: 'Arial', marginTop: 5 }}>
                Agedamento de serviços para profissionais autônomos
              </Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icone-perfil.png')}
                  style={{
                    height: 50,
                    width: 50,
                    marginStart: 10,
                    borderRadius: 100,
                    marginBottom: 3,
                    backgroundColor: '#6631d7',
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 'bold',
                    fontSize: 10,
                    height: 15,
                    width: 40,
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderRadius: 5,
                    marginStart: 15,
                  }}>
                  PERFIL
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ height: 205, width: 180, marginStart: 15 }}>
            <Text style={{ fontFamily: 'Arial' }}>
              Este é um aplicativo que permite que profissionais autônomos, como
              cabeleireiros, manicures, fotógrafos etc., cadastrem seus clientes
              pessoais, agendem serviços, visualizem sua agenda e recebam
              lembretes de compromissos.
            </Text>
          </View>
          <Image
            source={require('../../assets/Icone_paragrafo_pagina_inicial.png')}
            style={{ marginStart: 30, marginTop: 45, height: 90, width: 90 }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#659DF2',
            height: 100,
            width: 300,
            marginStart: 15,
            marginTop: 20,
            borderRadius: 15,
            borderColor: 'black',
            borderWidth: 2,
          }}>
          <Text
            style={{
              marginTop: 20,
              marginStart: 70,
              fontFamily: 'Arial',
              fontSize: 16,
            }}>
            Visualize seus clientes:
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('TelaManutencaoClientes')}
            style={{
              height: 30,
              width: 100,
              backgroundColor: '#6631D7',
              marginTop: 10,
              marginStart: 90,
              padding: 5,
              paddingStart: 20,
              borderRadius: 5,
            }}>
            <Text style={{ color: 'white' }}>CLIENTES</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#2DC75C',
            height: 100,
            width: 300,
            marginStart: 15,
            marginTop: 20,
            borderRadius: 15,
            borderColor: 'black',
            borderWidth: 2,
          }}>
          <Text
            style={{
              marginTop: 20,
              marginStart: 40,
              fontFamily: 'Arial',
              fontSize: 16,
            }}>
            Visualize seus agendamentos:
          </Text>
          <TouchableOpacity
          onPress={() => navigation.navigate('TelaManutencaoAgendamentos')}
            style={{
              height: 30,
              width: 150,
              backgroundColor: '#6631D7',
              marginTop: 10,
              marginStart: 70,
              padding: 5,
              paddingStart: 20,
              borderRadius: 5,
            }}>
            <Text style={{ color: 'white' }}>AGENDAMENTOS</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}
