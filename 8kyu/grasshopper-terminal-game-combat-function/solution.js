function combat(health, damage) {
    // Write your code here
    return health - damage < 0 ? 0 : health - damage;
}