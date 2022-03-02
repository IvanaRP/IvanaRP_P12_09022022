// make class for user

class User {
  id;
  userInfos;
  todayScore;
  keyData;

  constructor(data) {
    this.userId = data.userId;
    this.userInfos = data.userInfos;
    this.todayScore = data.todayScore;
    this.keyData = data.keyData;
  }
}

// fetch mocked DATA for user

export default class FetchData {


  async getInfo(userId) {
    try {
      //MOCKED DATA
      const response = await fetch("../data/" + userId + ".json");
      //API DATA
    //   const response = await fetch("http://localhost:3000/user/" + userId);
      const data = await response.json();
      return new User(data.data);
    } catch (error) {
      console.error(error);
    }
  }
}
