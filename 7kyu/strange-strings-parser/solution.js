function wordSplitter(string) {
    return string.split(/[^a-z\d.-]/i)
}