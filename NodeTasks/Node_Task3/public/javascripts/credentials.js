const user = [
  {
    id: 1,
    uname: "Ajay",
    pw: "a123",
    email: "ajay@xyz.com",
  },
  {
    id: 2,
    uname: "Krishna",
    pw: "k123",
    email: "krish@xyz.com",
  },
  {
    id: 3,
    uname: "Manohar",
    pw: "m123",
    email: "manuu@xyz.com",
  },
];

const checkUser = (uname, pw) => {
  const ans = user.filter((data) => {
    return data.uname === uname && data.pw === pw;
  });
  if (ans.length === 1) {
    return { bool: true, id: ans.id };
  } else {
    return { bool: false, id: -1 };
  }
};

const getMail = (uname) => {
  const ans = user.filter((data) => {
    if (data.uname === uname) {
      console.log(data.email);
      return data.email;
    }
  });
  let mail;
  for (data of ans) {
    mail = data.email;
  }
  return mail;
};
module.exports = { checkUser, getMail };
