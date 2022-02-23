import React, { useEffect, useState } from "react"

const PassParam = () => {
  const [user, setUser] = useState([])
  const userId= 1

  const fetchData = () => {
    fetch(`http://localhost:3000/${userId}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUser(data[0].name)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <div>Name: {user}</div>
}

export default PassParam