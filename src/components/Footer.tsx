export default function Footer() {
  return (
    <footer className="py-4 mt-auto text-sm text-center border-t text-slate-400 border-slate-200">
      <p className="mx-2">
        CryptoTracker © {new Date().getFullYear()}{' '}
        <a
          href="https://github.com/feliperdamaceno"
          target="_blank"
          rel="author"
        >
          feliperdamaceno
        </a>
      </p>
    </footer>
  )
}
