export default function Loading() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light"
    >
      {/* Bootstrap spinner */}
      <div
        className="spinner-border text-primary mb-3"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>

      {/* Main message */}
      <h5 className="text-dark fw-semibold">Loading pumps...</h5>

      {/* Subtext */}
      <p className="text-muted mt-2">
        Please wait while we fetch the latest data
      </p>
    </section>
  );
}
