// Not redirect(): in the static export that renders an error page that only redirects
// with JS. A meta refresh works in `next dev`, on static hosting and without JS.
export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/en/" />
      <a href="/en/">Tampere Design System</a>
    </>
  );
}
