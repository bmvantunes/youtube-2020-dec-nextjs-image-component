import Head from 'next/head';

export default function SrcSet() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        />
      </Head>

      <h2>My Image</h2>
      <div className="row">
        <img
          className="col-sm-6 col-md-4"
          src="/example-red/small-800px.png"
          srcSet="
        /example-red/small-800px.png 800w,
        /example-red/medium-1200px.png 1200w,
        /example-red/large-1600px.png 1600w,
        "
          sizes="(min-width: 767px) 33vw, (min-width: 568px) 50vw, 100vw"
        />

        <img
          className="col-sm-6 col-md-4"
          src="/example-blue/small-800px.png"
          srcSet="
        /example-blue/small-800px.png 800w,
        /example-blue/medium-1200px.png 1200w,
        /example-blue/large-1600px.png 1600w,
        "
        />
      </div>
    </div>
  );
}
