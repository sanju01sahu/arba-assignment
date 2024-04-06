import styled from 'styled-components'

function Navbar() {
  return (
    <DIV>
      <div className='navbox'>
      <div className='navbar'>
      
        <div className='homepage'>
        <a href="/">Home</a>
        
        {/* <a href="">Instructions</a> */}
        <a href="">About</a>
        </div>
        <div className='login'>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
    </DIV>
  )
}

export default Navbar


const DIV= styled.div`
  .navbar {
  height: 60px;
  background-color: #89CFF3;
  color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 160px; */
}
`
