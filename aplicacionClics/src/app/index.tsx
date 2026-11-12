import { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

type Registro = { id: number; numero: number; hora: string };

export default function App() {
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  const incrementarContador = () => {
    const nuevo = contador + 1;
    const ahora = new Date();
    const hora = [ahora.getHours(), ahora.getMinutes(), ahora.getSeconds()]
      .map((n) => String(n).padStart(2, "0"))
      .join(":");

    setContador(nuevo);
    // El más reciente va primero
    setRegistros([{ id: Date.now(), numero: nuevo, hora }, ...registros]);
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

        {/* Tabla de registros */}
        <View style={estilos.tableContainer}>
          {/* Cabecera */}
          <View style={estilos.tableHeader}>
            <Text style={[estilos.th, estilos.cellNumero]}>Nº Clic</Text>
            <Text style={[estilos.th, estilos.cellHora]}>Hora</Text>
          </View>

          {/* Cuerpo con scroll */}
          <ScrollView style={estilos.tableBody}>
            {registros.map((item, index) => (
              <View
                key={item.id}
                style={[estilos.tr, index % 2 === 0 ? estilos.trEven : null]}
              >
                <Text style={[estilos.td, estilos.cellNumero]}>{item.numero}</Text>
                <Text style={[estilos.td, estilos.cellHora]}>{item.hora}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
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
  tableContainer: {
    width: "100%",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  tableBody: { maxHeight: 170 },
  tr: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#ffffff",
  },
  trEven: { backgroundColor: "#fafafa" },
  th: { color: "#7f8c8d", fontWeight: "600", fontSize: 14, padding: 10, textAlign: "center" },
  td: { color: "#333", fontSize: 14, padding: 10, textAlign: "center" },
  cellNumero: { flex: 1 },
  cellHora: { flex: 1.5 },
});