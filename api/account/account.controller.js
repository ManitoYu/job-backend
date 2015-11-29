var Account = require('./account.model');

exports.signup = function (req, res) {

  var password = req.body.data.password;
  var repassword = req.body.data.repassword;
  var email = req.body.data.email;

  // 账号或密码为空
  if (! password || ! repassword || ! email) {
    res.send({ status: 200, msg: '邮箱或密码不合法' });
  }

  // 两次密码不匹配
  if (password !== repassword) {
    res.send({ status: 200, msg: '两次密码不一致' })
  }

  // 新建用户
  var account = new Account({
    email: email,
    password: password,
    role: req.body.data.role
  });

  new Promise(function (resolve, reject) {
    account.save(function (err, doc) {
      if (err) reject(err);
      resolve(doc);
    });
  })
  .then(function (newAccount) {
    res.send({ 
      status: 200,
      msg: '注册成功',
      code: 0,
      data: { accountId: newAccount._id, email: newAccount.email, role: newAccount.role }
    });
  })
  .catch(function (err) {
    console.error(err);
  });

};

exports.signin = function (req, res) {

  var email = req.body.data.email;
  var password = req.body.data.password;

  if (! email || ! password) {
    res.send({ status: 200, msg: '邮箱或密码不合法' });
  }

  new Promise(function (resolve, reject) {
    Account.findOne({ email: email, password: password }).exec(function (err, account) {
      if (err) reject(err);
      resolve(account);
    })
  })
  .then(function (account) {
    if (! account) {
      res.send({ status: 200, msg: '账号或密码错误' })
    }
    res.send({
      status: 200,
      msg: '登录成功',
      code: 0,
      data: { accountId: account._id, email: account.email, role: account.role }
    });
  })
  .catch(function (err) {
    console.error(err);
  });

};