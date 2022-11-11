function getFirstPython(list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].language == 'Python')
            return list[i].firstName + ", " + list[i].country
    }
    return 'There will be no Python developers'
}