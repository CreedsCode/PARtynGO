import "./Background.css";

export default function Header() {
  return (
    <>
      <div className="bm-pl">
        <div className="bm-pl__blob bm-pl__blob--r"></div>
        <div className="bm-pl__blob bm-pl__blob--g"></div>
        <div className="bm-pl__blob bm-pl__blob--b"></div>
      </div>
      <div className="bm-overlay"></div>
      <div className="container mx-auto px-2 w-full">
        <a href="/" alt="Homepage">
          <img
            src="/logo-pink.png"
            alt="logo"
            className="logo"
            width="200"
            height="200"
          />
        </a>
      </div>
    </>
  );
}
