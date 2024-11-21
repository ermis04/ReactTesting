import { useTheme } from '../hooks/theme.hook'
import MyContainer from './components/MyContainer';
import MyContainer1 from './components/MyContainer1';

export default function HomePage() {
  const { toggle, dark } = useTheme();

  return (
    <section
        style={{
            backgroundColor: !dark ? "white" : "black",
        }}
    >
        <button onClick={toggle}>
            {!dark ? "set Dark theme" : "set Light Theme"}
        </button>
        <MyContainer />
        <MyContainer1 />
    </section>
  )
}
