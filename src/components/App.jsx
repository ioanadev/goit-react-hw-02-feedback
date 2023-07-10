import { Counter } from './Statistics/statistics';
import { Section } from './Title/tittle';

export const App = () => {
  return (
    <div>
      <Section title="Please leave feedback">
        <Counter />
      </Section>
    </div>
  );
};
