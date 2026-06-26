export default function PageIntro({ header, title, text }) {
  return (
    <>
        <div className="text-center mb-16">
            <p className="subtitle">
                {header}
            </p>
            <h1 className="title">
                {title}
            </h1>
            <p className="paragraph">
                {text}
            </p>
        </div>
    </>
  );
}