import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    // const onClick= ()=> {
    //     console.log('Click')
    // }
    
    
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button 
            color={showAdd ? 'red' : 'green'}
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd}
            />           
        </header>
    )
}

Header.defaultProps = {
    title: 'Schedule Keeper',
  }

  Header.propTypes = {
      title:PropTypes.string.isRequired,
  }
  
//css in js
//   const headingStyle = {
//     color: 'purple', 
//     backgroundColor:'white'
//   }

export default Header
