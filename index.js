const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(
    function (selector = '.active') {
        return function({ addVariant }) {
            addVariant('current', `&${selector}`);
            addVariant('group-current', `${selector} &`);
        }
    },
)
