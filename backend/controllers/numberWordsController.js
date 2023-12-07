const asyncHandler = require("express-async-handler");

exports.get_words_from_numbers = asyncHandler(async (req, res, next) => {
    let numbers = req.query.numbers
                    .split(',');

    if (numbers.some(n => !Number.isInteger(+(n.trim())))) {
        return res.status(400).send('BAD REQUEST');
    }

    numbers = numbers.map(n => {
        num = +n; // cast string to number
        let words = convert(num);

        return {
            'words':  n.length == 0 ? null : words,
            'over9000': num > 9000
        };
    });

    if (numbers.some(n => n.words === null)) {
        return res.status(400).send('BAD REQUEST');
    }

    numbers.sort((a, b) => a.words.localeCompare(b.words));

    return res.status(200).send(numbers);
});

const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

// Due to the limitations of language, this needs to be expanded for each magnitude.
// For the purpose of this app, we cover up to the max int value in JS (+/-)
function convert(n) {
    if (n === 0) return 'Zero';

    let word = '';
    if (n < 0) {
        word += 'Negative ';
        n = -n;
    }

    if (n > Number.MAX_SAFE_INTEGER) {
        return null;
    }

    return (word + convert_quadrillions(n)).trim();
}

function convert_quadrillions(n) {
    if (n > 1000000000000000) {
        return convert_hundreds(Math.floor(n / 1000000000000000)) + " Quadrillion " + convert_trillions(n % 1000000000000000);
    } else {
        return convert_trillions(n);
    }
}

function convert_trillions(n) {
    if (n > 1000000000000) {
        return convert_hundreds(Math.floor(n / 1000000000000)) + " Trillion " + convert_billions(n % 1000000000000);
    } else {
        return convert_billions(n);
    }
}

function convert_billions(n) {
    if (n > 1000000000) {
        return convert_hundreds(Math.floor(n / 1000000000)) + " Billion " + convert_millions(n % 1000000000);
    } else {
        return convert_millions(n);
    }
}

function convert_millions(n) {
    if (n >= 1000000) {
        return convert_hundreds(Math.floor(n / 1000000)) + " Million " + convert_thousands(n % 1000000);
    } else {
        return convert_thousands(n);
    }
}

function convert_thousands(n) {
    if (n >= 1000) {
        return convert_hundreds(Math.floor(n / 1000)) + " Thousand " + convert_hundreds(n % 1000);
    } else {
        return convert_hundreds(n);
    }
}

function convert_hundreds(n) {
    if (n > 99) {
        return ones[Math.floor(n / 100)] + " Hundred " + convert_tens(n % 100);
    } else {
        return convert_tens(n);
    }
}

function convert_tens(n) {
    if (n < 10) return ones[n];
    else if (n >= 10 && n < 20) return teens[n - 10];
    else {
        return (tens[Math.floor(n / 10)] + " " + ones[n % 10]).trim();
    }
}