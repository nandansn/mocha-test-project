function waitTest() {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 3000);
    });
}

waitTest().then(() => {
    console.log('done');
})