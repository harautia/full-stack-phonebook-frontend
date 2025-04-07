/* Should this be combined with Alert.jsx? */

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div className='notification'>
        {message}
      </div>
    )
  }

  export default Notification