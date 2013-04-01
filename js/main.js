var iDiagnose = {};

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

iDiagnose.gatherAnswers = function () {
    var questionParams = [
            ''
        ],

        saveToLocal = function (key, value) {
            if (!value && !key) {
                throw new Error('argument error');
            }
            if (window.localStorage) {
                localStorage.setItem(key, JSON.stringify(value));
            } else {
                Cookie.write(key, JSON.stringify(value));
            }
        },
        getFromLocal = function (key) {
            var value = window.localStorage? localStorage.getItem(key): Cookie.read(key);
            if (value && value !== 'undefined') {
                return JSON.parse(value);
            } else {
                return [];
            }
        };

    location.

};

iDiagnose.gatherAnswers();
