import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
// import { tw } from "tailwind-rn";
import { useTailwind } from "tailwind-rn";
export default function App() {
  const tw = useTailwind();
  return (
    <View style={tw("pt-12 justify-center items-center")}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
