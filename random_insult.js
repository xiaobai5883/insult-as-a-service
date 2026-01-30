// Loads JSON → Returns 1 random insult
fetch('insult_reasons.json')
  .then(r => r.json())
  .then(data => {
    const randomInsult = data.insults[Math.floor(Math.random() * data.insults.length)];
    // Return as clean JSON
    return new Response(JSON.stringify({insult: randomInsult}), {
      headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
    });
  })
  .catch(() => new Response(JSON.stringify({insult: "Server error - try again!"}), {
    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
  }));
