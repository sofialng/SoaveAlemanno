function Quote({ quote, attribution }) {
  return (
    <section className="relative min-h-40 bg-secondary-light flex items-center p-16 md:p-16 lg:p-16">
        <div className="w-full flex flex-col gap-4 justify-center">
            <div className="relative max-w-180 mx-auto p-10 bg-white shadow-md">
                <p className="absolute top-4 left-4 font-serif-italic text-start text-9xl text-primary-dark">“</p>
                <p className="text-lg leading-relaxed text-center font-serif-italic m-10 lg:px-10 lg:pl-12">
                    {quote}
                </p>
                <p className="absolute bottom-4 right-4 font-serif-italic text-right text-9xl rotate-180 text-primary-dark">“</p>
            </div>  

            <p className="text-lg leading-relaxed text-center font-bold text-secondary-dark">
                {attribution}
            </p>
        </div>
    </section>
  );
}

export default Quote;
