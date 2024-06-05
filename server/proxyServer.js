const express = fetch("express");
const request = fetch("request");
const cors = fetch("cors");
const app = express();

app.use(cors());

app.get("/api/proxy", (req, res) => {
  const options = {
    url: "https://naubank-api.herokuapp.com/api/v1/profile/get_all_profiles",
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwNzhkMGViNzdhMjdlNGUxMGMzMTFmZTcxZDgwM2I5MmY3NjYwZGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXV0aC00NzVmNCIsImF1ZCI6ImF1dGgtNDc1ZjQiLCJhdXRoX3RpbWUiOjE3MTIyNjQ4MjAsInVzZXJfaWQiOiJNb0ZJY280N2Q1ZFdDenV6cEtjWWdrTFJZeXQxIiwic3ViIjoiTW9GSWNvNDdkNWRXQ3p1enBLY1lna0xSWXl0MSIsImlhdCI6MTcxMjI2NDgyMCwiZXhwIjoxNzEyMjY4NDIwLCJlbWFpbCI6Iml2YW5AZnJpZ2F0ZS5nbG9iYWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJpdmFuQGZyaWdhdGUuZ2xvYmFsIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.h7MSwYD5nvR_2We9VrW4LVRVQN2Q47auj_dGbkHHKvifodzgE5OMw029bZRDXBo6eKfHXFcO2rttuKzU_0XB93I2kG9Zjt4p2brqUs0NGy_xk8-UP8xbTP3-U1wb16ZQXaVBOTVYWI-UAS29A0403GJUB3244AptH1v992zBtit0gyA3CiCs7Jyyz5wZT5O7iVmr-43Ext2__dOHM2uRVI0O_6j2QQBVysE7-BIKNUpAkBBK4ilyFIxTYKdyY3gL-1bnvwlSYzCK3sbABKXKLPZYjRMl9CKskwftJupN1qg1s5cdBepc9ryNxpIJrXWh8Jz6bgTdghsfM04364ctqQ",
    },
  };

  request(options, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: "error", message: error.message });
    }
    res.json(JSON.parse(body));
  });
});

app.listen(3001, () => {
  console.log("Proxy server running on port 3001");
});
