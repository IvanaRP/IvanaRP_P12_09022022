
// class User {
//     id;
//     userInfos;
//     todayScore;
//     keyData;
  
//     constructor(data) {
//       this.userId = data.userId;
//       this.userInfos = data.userInfos;
//       this.todayScore = data.todayScore;
//       this.keyData = data.keyData;
//     }
//   }

export default class GetData {
    /**
     * @description gets the user information (depends on userID)
     * @param {number} userId  id of the user
     * @returns A promise with the User model object of this user
     */
    async getInfo() {
      try {
        //for using mocked data
        //const response = await fetch("../user/" + userId + ".json");
        //for using API
        const response = await fetch(`"http://localhost:3001/user/${idUser}`);
        const data = await response.json();
        return new User(data.data);
      } catch (error) {
        console.error(error);
        //for using mocked data
        /*document.location.href =
          "https://sportsee-p12-dfe-oc-herault-benedicte.netlify.app/profile";*/
        //for using API
        document.location.href = "http://localhost:3000/profile";
      }
    }

}