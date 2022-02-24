import React, { Component } from "react";

class Api extends Component {
  state = {
    data: [],
    isLoaded: false,
  };

  async componentDidMount() {
    // fetch('http://localhost:3000/user/12')
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));

    try {
      const response = await fetch("http://localhost:3000/user/12");
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/posts"
    //   );
      const data = await response.json();
      console.log(response);
      console.log(data);
      this.setState({ data, isLoaded: true });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log("render method called");

    console.log(this.state);

    const { data, isLoaded } = this.state;
    return (
      <div>
        app component
        {!isLoaded ? (
          <div> Loading ...</div>
        ) : (
          <ul>
            {data.map((item) => {
            //   return <li key={item.id}>{item.body}</li>;
                return <li key={item.id}>{item.data}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default Api;
