import "./Background.css";

export default function Header({ size = 130 }) {
  return (
    <>
      <div className="bm-pl">
        <div className="bm-pl__blob bm-pl__blob--r"></div>
        <div className="bm-pl__blob bm-pl__blob--g"></div>
        <div className="bm-pl__blob bm-pl__blob--b"></div>
      </div>
      <div className="bm-overlay"></div>
      <div className="container mx-auto px-2 w-full flex flex-col items-center">
        <a href="/" alt="Homepage">
          <img
            src="/logo-pink.png"
            alt="logo"
            className="logo my-8"
            width={size}
            height={size}
          />
        </a>
      </div>
    </>
  );
}
