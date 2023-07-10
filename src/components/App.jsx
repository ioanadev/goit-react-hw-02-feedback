import { Counter } from './Statistics/statistics';
import { Section } from './Title/tittle';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'left',
        marginLeft: 50,
      }}
    >
      <Section title="Please leave feedback">
        <Counter />
      </Section>
    </div>
  );
};
