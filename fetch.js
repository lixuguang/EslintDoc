
async function getTr(words,success,fail) {
  var ts = getTime();
  var salt = getSalt(ts);
  var url =
    'http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule';
  var form = {
    i: words,
    from: 'AUTO',
    to: 'AUTO',
    smartresult: 'dict',
    client: 'fanyideskweb',
    salt: salt,
    sign: getSign(words, salt),
    ts: ts,
    bv: '10ca024c796f59b2c3d4d348f4741a26',
    doctype: 'json',
    version: '2.1',
    keyfrom: 'fanyi.web',
    action: 'FY_BY_REALTlME',
  };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then((res) => {
success(res);
    })
    .catch((err) => {
      fail(err)
    });
}
function getTime() { 
  return +new Date()
}
function getSalt(ts) {
  return ts+parseInt(10 * Math.random(), 10);
}
function getSign(words, salt) {
  return sha256('fanyideskweb' + words + salt + 'Nw(nmmbP%A-r6U3EUn]Aj');
}

export default getTr;