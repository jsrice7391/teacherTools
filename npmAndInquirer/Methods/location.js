function hidden(hello) {
    console.log(`Hidden but ${hello}`)
}

function yellAtLocation() {
    console.log("HEEEEEEEEEEY")
    hidden("heeeeeey")
}


module.exports = {
    yellAtLocation: yellAtLocation,
    whisper: function (loc) {
        console.log(`Hello fromm, ${loc}`)
    },
    count: function (num) {
        for (var i = 0; i < num; i++) {
            console.log(i)
        }

    }
}

// export const yell = (whisper) => {
//     console.log(whisper)
// }