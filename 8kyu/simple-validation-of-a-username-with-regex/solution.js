function validateUsr(username) {
    console.log(username)
    if (username.length > 16 || username.length < 4) return false;
    let res = /^[a-z0-9_]*$/.test(username)
    return res
}

function validateUsr(username) {
    /**
      - `^`        Start from the beginning of the string.
      - `[]`       Allow any character specified, including...
      - `a-z`      anything from a to z,
      - `0-9`      anything from 0 to 9,
      - `_`        and underscore.
      - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
      - `$`        End the string right after specified amount of allowed characters is given.
    */
    const validator = /^[a-z0-9_]{4,16}$/;

    return validator.test(username);
}