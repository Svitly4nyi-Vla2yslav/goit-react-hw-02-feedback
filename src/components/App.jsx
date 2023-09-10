import { Feedback } from "./Feedback/Feedback";
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback
        initialValueGood={0}
        initialValueNeutral={0}
        initialValueBad={0}
        total={0}
        positivePercentage={0} />
    </div>
  );
};
