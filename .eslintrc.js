module.exports = {
    "extends": [
        "airbnb",
    ],
    "env": {
        "browser": true,
        "mocha": true,
        "es6": true
    },
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": [1, 4],
        "react/jsx-indent-props": [1, 4],
        "react/prop-types": [0],
        "import/prefer-default-export": [0],
        "react/no-multi-comp": [0],
    },
    "plugins": [
    ]
};
