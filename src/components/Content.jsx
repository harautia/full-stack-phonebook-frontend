import Part from "./Part"

const Content = (props) => {
    console.log(props)
    return (
      <div>
        {props.course.parts.map((part, index) => (
            <Part key={index} part={part.name} exercise={part.exercises} />
          ))
        }
      </div>

    )
  }
export default Content