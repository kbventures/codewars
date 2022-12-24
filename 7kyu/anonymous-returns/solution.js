var name = 'The Window';

var alpha = {
    name: 'My Alpha',
    getNameFunc: function () {
        return function () {
            return this.name;
        }.bind(this);
    }
};