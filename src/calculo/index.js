import React, { useState } from "react";



import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Estilos from "./style";

const Calculo = ({ navigation }) => {
  const [km, setKm] = useState(null);
  const [litros, setLitros] = useState(null);
  const [alertKm, setAlertKm] = useState(null);
  const [alertLitros, setAlertLitros] = useState(null);
  const validar = () => {
    setAlertKm(null);
    setAlertLitros(null);
    let error = false;
    if (km == null || km.indexOf("-") != -1) {
      setAlertKm("Preencha a quilometragem");
      error = true;
    }
    if (litros == null || litros.indexOf("-") != -1) {
      setAlertLitros("Preencha a quantidade de litros");
      error = true;
    }
    return !error;
  };

  const acessar = () => {
    if (validar()) {
      navigation.navigate("resultado", {
        quilometragem: km,
        litros: litros,
      });
    }
  };

  return (
    <SafeAreaView style={Estilos.background}>
      <View style={Estilos.boxCalculo}>
        <Text style={Estilos.title}>Média de Consumo de Gasolina por Km percorrido</Text>
        <View style={Estilos.boxInput}>
          <TextInput
            placeholder={"Kms percorridos"}
            style={Estilos.input}
            value={km}
            onChangeText={setKm}
            keyboardType="numeric"
          />
        </View>
        {alertKm ? <Text style={Estilos.erros}>{alertKm}</Text> : null}

        <View style={Estilos.boxInput}>
          <TextInput
            placeholder={"Litros de gasolina"}
            style={Estilos.input}
            value={litros}
            onChangeText={setLitros}
            keyboardType="numeric"
          />
        </View>
        {alertLitros ? <Text style={Estilos.erros}>{alertLitros}</Text> : null}

        <TouchableOpacity
          style={Estilos.boxButton}
          onPress={() => acessar()}
        >
          <Text style={Estilos.buttonText}>Calcular a média</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default Calculo;