async function test(title, callback) {
    try {
        await callback()
        console.log(`✓ ${title}`)
    } catch(err) {
        console.error(`✕ ${title}`)
        console.error(err)
    }
}

function expect(actual) {
    return{
        toBe(expected) {
            if(expected !== actual) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}

global.expect = expect
global.test = test