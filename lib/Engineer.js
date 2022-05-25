const Employee = require("./Employee");

class Engineer extends Employee {
  // TODO - Write Engineer class so it satisfies the test cases when running `npm run test`
  constructor(name, id, email, github) {
    super(name, id, email, 'Engineer');
    this.github = github;
  };

  getGithub(){
    return this.github
  }

  makeHTML(){
    return `
    <div class="card" style="width: 18rem;">
        <img src="https://media.istockphoto.com/photos/engineer-using-tablet-and-working-in-factory-picture-id1195885084?k=20&m=1195885084&s=612x612&w=0&h=4il_Ywj3y7RY12yniq1tt0GI6SmG4Kw7cp1KX1A5XOY="
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">My github is ${this.github}</p>
        </div>
    </div>`
  }
}

module.exports = Engineer;
