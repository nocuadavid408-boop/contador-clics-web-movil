import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <View style={estilos.body}>
      <View style={estilos.card}>
        <Text style={estilos.title}>Interactividad con el DOM</Text>
        <Text style={estilos.subtitle}>
          Haz clic en el botón para incrementar el contador y registrar la hora exacta del evento en la tabla.
        </Text>

        <Text style={estilos.counterBox}>{contador}</Text>

        {/* Botón disparador de eventos */}
        <TouchableOpacity style={estilos.btnClick} onPress={incrementarContador}>
          <Text style={estilos.btnText}>¡Haz Clic Aquí!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#f4f7f6",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: 480,
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  title: { fontSize: 22, fontWeight: "bold", color: "#2c3e50", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#555", textAlign: "center" },
  counterBox: { fontSize: 56, fontWeight: "bold", color: "#3498db", marginVertical: 20 },
  btnClick: {
    backgroundColor: "#2ecc71",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
  },
  btnText: { color: "#ffffff", fontSize: 16, fontWeight: "bold" },
});