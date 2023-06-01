// Data
const users = [
  {
    login: "knuth",
    firstName: "Donald",
    lastName: "Knuth",
    likes: ["C", "Unix"],
  },
  {
    login: "norvig",
    firstName: "Peter",
    lastName: "Norvig",
    likes: ["AI", "Search", "NASA", "Mars"],
  },
  {
    login: "mfowler",
    firstName: "Martin",
    lastName: "Fowler",
    likes: ["Design Patterns", "Refactoring"],
  },
  {
    login: "kent",
    firstName: "Kent",
    lastName: "Beck",
    likes: ["TDD", "wikis", "Design Patterns"],
  },
];

// lookup()
const lookup = (login, property) => {
  let userLog;

  users.forEach((user) => {
    if (user.login === login) {
      userLog = user;
    }
  });

  if (!userLog) {
    throw new Error(`Could not find user: ${login}`);
  }

  if (!userLog.hasOwnProperty(property)) {
    throw new Error(`Could not find property: ${property}`);
  }

  return userLog[property];
};

module.exports = { lookup };
