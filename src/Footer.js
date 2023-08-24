const Footer = ({length}) => {
    const today = new Date();
    const footerStyle = {
        background: 'gold',
        color: 'darkblue'
    };
  return (
    <footer style={footerStyle}>
      <p>{length} List {length===1?"item":"items"}</p>
        <p>
            Copyright &copy; {today.getFullYear()}
        </p>
    </footer>
  )
}

export default Footer  