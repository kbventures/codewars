function solve(s) {
    //..

    let uppercase = 0;
    let lowercase = 0;
    let numbers = 0;
    let special = 0;

    s.split('').forEach(e => {
        console.log()
        let temp = e.charCodeAt()
        switch (true) {
            case (temp >= 65 && temp < 91):
                uppercase++;
                break;
            case (temp >= 48 && temp < 58):
                numbers++;
                break;
            case (temp > 96 && temp < 123):
                lowercase++;
                break;

            default:
                special++;
                break;
        }


    })

    return [uppercase, lowercase, numbers, special]
}