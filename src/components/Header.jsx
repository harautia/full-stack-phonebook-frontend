const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h2>{props.course.name}</h2>
      </div>
    )
  }

export default Header