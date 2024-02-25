arrayoffunctions = [
    function (kb2mb) {
        return kb2mb / 1024
    },
    function (mb2kb) {
        return mb2kb * 1024
    },
    function (f2i) {
        return 12 * f2i
    },
    function (i2f) {
        return i2f / 12
    },
    function (f2c) {
        return (5 / 9) * (f2c - 32)
    },
    function (c2f) {
        return (9 / 5) * c2f + 32
    },
    function (ac2sq) {
        return ac2sq * 43560;
    },
    function (sq2ac) {
        return sq2ac / 43560;
    }
]

document.getElementById("fruits").addEventListener("change", function () {
    var selectedOption = this.options[this.selectedIndex];
    first = selectedOption.innerText.split(" ")[0]
    second = selectedOption.innerText.split(" ")[2]
    ka = document.getElementById("topp").innerText
    console.log(first)
    document.getElementById("topp").innerText = "Enter " + first;
    document.getElementById("bottomp").innerText = second;
})

let subselection = 0;
scal = document.getElementById("swap").addEventListener("click", function () {
    subselection = (subselection === 0) ? 1 : 0;
    console.log(subselection)
    a = document.getElementById("topp").innerText;
    b = document.getElementById("bottomp").innerText;
    temp = a;
    document.getElementById("topp").innerText = b;
    document.getElementById("bottomp").innerText = temp

});

calculate = document.getElementById("convert").addEventListener("click", function () {
    const selection = 2 * parseInt(document.getElementById("fruits").value) + subselection - 2;
    const inputValue = parseFloat(document.getElementById("top").value);
    console.log(arrayoffunctions[selection])
    document.getElementById("bottom").value = arrayoffunctions[selection](inputValue);
});

p = document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("top").value = ""
    document.getElementById("bottom").value = ""
})