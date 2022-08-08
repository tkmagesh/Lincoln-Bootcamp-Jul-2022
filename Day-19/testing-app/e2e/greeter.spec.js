const { openBrowser, goto, textBox, into, write, click, text, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto('http://localhost:4200');
        await write('Magesh', into(textBox('User Name :')));
        await click('Greet');
        await text('Hi Magesh, Good Afternoon!').exists();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();