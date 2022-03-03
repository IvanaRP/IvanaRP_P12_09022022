
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

// make class for USER_ACTIVITY
class Activity {
    userId;
    sessions;
  
    constructor(data) {
      this.userId = data.userId;
      this.sessions = data.sessions;
    }
  }

// make class for USER_AVERAGE_SESSIONS
class AverageSessions {
    userId;
    sessions;
  
    constructor(data) {
      this.userId = data.userId;
      this.sessions = data.sessions;
    }
  }

// make class for USER_PERFORMANCE
  class Performance {
    userId;
    kind;
    data;
  
    constructor(data) {
      this.userId = data.userId;
      this.kind = data.kind;
      this.data = data.data.map((entry) => ({
        value: entry.value,
        kind: this.kind[entry.kind],
      }));
      this.data = this.data.reverse();
    }
  }


// fetch mocked DATA for user

export default class FetchData {

// user
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


  // userACTIVITY
  async getActivity(userId) {
    try {
      //MOCKED DATA
      const response = await fetch("../data/" + userId + "/USER_ACTIVITY.json");
      //API DATA
    //   const response = await fetch("http://localhost:3000/user/"+ userId +"/activity");
      const data = await response.json();
      return new Activity(data.data);
    } catch (error) {
      console.error(error);
    }
  }


    // userAVERAGE_SESSIONS
    async getAverageSessions(userId) {
        try {
          //MOCKED DATA
        //   const response = await fetch("../data/" + userId + "/USER_AVERAGE_SESSIONS.json");
          //API DATA
          const response = await fetch("http://localhost:3000/user/"+ userId +"/average-sessions");
          const data = await response.json();
          return new AverageSessions(data.data);
        } catch (error) {
          console.error(error);
        }
      }


 // userAVERAGE_SESSIONS
 async getPerformance(userId) {
    try {
      //MOCKED DATA
    //   const response = await fetch("../data/" + userId + "/USER_PERFORMANCE.json");
      //API DATA
      const response = await fetch("http://localhost:3000/user/"+ userId +"/performance");
      const data = await response.json();
      return new Performance(data.data);
    } catch (error) {
      console.error(error);
    }
  }


}


