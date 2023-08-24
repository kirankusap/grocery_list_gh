const Header = ({ heading }) => {
    return (
      <header style={{
          background: 'mediumblue',
          color: '#fff'
  
      }}>
      <h1>{heading}</h1>
      </header>
    )
  }
  
  // setting default props. these will be used when
  // the props are not provided by parent component
  Header.defaultProps = {
    heading:'default title'
  }
  
  export default Header