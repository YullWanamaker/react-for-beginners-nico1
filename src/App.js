function App() {
  const [loading, setLoading] = useState(ture);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : null}
    </div>
  );
}
export default App;
