import AppMain from './src'
import { GeneratePasswordProvider } from "providers/useGeneratePassword";

export default function App() {
  return (
    <GeneratePasswordProvider>
      <AppMain />
    </GeneratePasswordProvider>
  );
}
