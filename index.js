const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.get('/getGitHubUser/:username', async (req, res) => {
    function getGitHubUser(username){
        return fetch('https://api.github.com/users/'+username);
    }
    const githubUserDetails = await getGitHubUser(req.params.username);
    const getJSONData = await githubUserDetails.json();
    
    res.json(getJSONData);
});

app.listen(port,() => {
    console.log('app is running on port'+ port)
})