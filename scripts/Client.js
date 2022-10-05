class Client {
  constructor() {
    //Your token goes here
    this.token = "9f010e4f";
  }

  async getMovieData(movie) {
    let response = await fetch(
      `http://www.omdbapi.com/?t=${movie}&apikey=${this.token}`
      //   `http://www.omdbapi.com/?t=${movie}`
    );
    let data = await response.json();
    // console.log(data);
    return data;
  }
}

console.log("Hello from Client.js");

export default Client;
