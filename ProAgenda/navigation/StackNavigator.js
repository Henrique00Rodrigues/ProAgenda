import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tela_Inicial from "../Telas/Telas_Complementares/Tela_Inicial";
import Tela_Adicionar_Cliente from "../Telas/Telas_Cliente/Tela_Adicionar_Cliente";
import Tela_Manutencao_Clientes from "../Telas/Telas_Cliente/Tela_Manutencao_Clientes";
import Tela_Manutencao_Agendamentos from "../Telas/Telas_Agendamento/Tela_Manutencao_Agendamentos";
import Tela_Edicao_Agendamento from "../Telas/Telas_Agendamento/Tela_Edicao_Agendamento";
import Tela_Adicionar_Agendamento from "../Telas/Telas_Agendamento/Tela_Adicionar_Agendamento";
import Tela_Perfil_Cliente from "../Telas/Telas_Cliente/Tela_Perfil_Cliente";
import Tela_Perfil from "../Telas/Telas_Complementares/Tela_Perfil"
import Tela_Login from "../Telas/Telas_Complementares/Tela_LogIn"
import Tela_SignUp from "../Telas/Telas_Complementares/Tela_Sign_Up"


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={Tela_Inicial} options={{ headerShown: false }} />
        <Stack.Screen name="TelaAdicionarCliente" component={Tela_Adicionar_Cliente} options={{ headerShown: false }} />
        <Stack.Screen name="TelaManutencaoClientes" component={Tela_Manutencao_Clientes} options={{ headerShown: false }} />
        <Stack.Screen name="TelaManutencaoAgendamentos" component={Tela_Manutencao_Agendamentos} options={{ headerShown: false }} />
        <Stack.Screen name="TelaAdicionarAgendamento" component={Tela_Adicionar_Agendamento} options={{ headerShown: false }} />
        <Stack.Screen name="TelaEdicaoAgendamento" component={Tela_Edicao_Agendamento} options={{ headerShown: false }} />
        <Stack.Screen name="TelaPerfilCliente" component={Tela_Perfil_Cliente} options={{ headerShown: false }} />
        <Stack.Screen name="TelaPerfil" component={Tela_Perfil} options={{ headerShown: false }} />
        <Stack.Screen name="TelaLogin" component={Tela_Login} options={{ headerShown: false }} />
        <Stack.Screen name="TelaSignUp" component={Tela_SignUp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}