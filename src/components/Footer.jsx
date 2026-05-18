function Footer() {
  const año = new Date().getFullYear()
  return (
    <footer style={{padding: '1rem', background: '#282c34', color: 'white', textAlign: 'center', marginTop: '2rem'}}>
      <p>© {año} Prácticas Profesionalizantes II</p>
    </footer>
  )
}
export default Footer