
function capital(capitals) {
    return capitals.map(c => `The capital of ${c.state || c.country} is ${c.capital}`);
}
