export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        background: "#ffffff"
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <h1 style={{ fontSize: 34, margin: 0 }}>Grassroots Football Network</h1>
        <p style={{ marginTop: 12, fontSize: 18, color: "#444" }}>Coming soon.</p>
        <p style={{ marginTop: 18, fontSize: 14, color: "#777" }}>
          Connecting grassroots football players with clubs.
        </p>
      </div>
    </main>
  );
}
