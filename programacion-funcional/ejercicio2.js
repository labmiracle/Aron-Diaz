const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

///1
const array = users.map(
  (user) => `${user.firstName}-${user.lastName}: ${user.role}`
);

///2
const roleFilter = users.filter((user) => user.role === "Full Stack Resident");

///3
const reduce = users.reduce((a, user) => {
  const { role } = user;
  a[role] = a[role] ? [...a[role], user] : [user];
  return a;
}, {});

///4
const findUser = (firstName) => {
  const user = users.find((user) => user.firstName === firstName);
  return user;
};
