const DashboardPage = () => {
  return (
    <>
      <p className="text-3xl font-bold underline">Dashboard</p>
      <button onClick={() => window.history.back()}>Back</button>
    </>
  );
};

export default DashboardPage;
