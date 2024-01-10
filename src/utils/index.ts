const aa = new Promise((resolve, reject) => {
    resolve("aa");
});

enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
}

function test(color: Color) {
    console.log(color);
}

test(Color.Red);

const a = 1;
const b = "2";
//    ^?
console.log(a + b);

/**
 *
 * @param time 毫秒
 * @example await sleep(1000);
 */
export function sleep(time: number) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}
