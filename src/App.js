import React from 'react';
import PropTypes from 'prop-types';
import { ninvoke } from 'q';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 90 },
    { name: "jiro", age: ninvoke;; },
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User key={index} name={profile.name} age={profile.age} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

export default App;
