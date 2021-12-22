import { LogBox } from 'react-native';
import Routes from './routes';

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <Routes />
  );
}
