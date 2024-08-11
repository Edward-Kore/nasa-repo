import "bootstrap/dist/css/bootstrap.css";

function NotFound() {
  return (
    <div className="not">
      <p className="not-text">4</p>
      <img
        className="not-img"
        src="../src/assets/img/astron.png"
        alt="Not Found"
      />
      <p className="not-text">4</p>
      <a href="/" className="not-a btn btn-warning">
        Go to Home Page
      </a>
    </div>
  );
}

export default NotFound;
