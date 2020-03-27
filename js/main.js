console.log('Linked!')

/*===== constants (cached DOM elements) =====*/

const $allElems = $('body header div');
const $addBtn = $('#addBtn');
const $subtractBtn = $('#subtractBtn');
const $input = $('input');

/*===== functions =====*/

function clearInput() {
    $input.val('');
}

function addValues() {
    let initVal = parseInt($allElems.text());
    initVal +=parseInt($input.val());
    $allElems.text(initVal);
    showColor();
}

function subtractValues() {
    let initVal = parseInt($allElems.text());
    initVal -=parseInt($input.val());
    $allElems.text(initVal);
    showColor();    
}

function showColor() {
    if ($allElems.text() < 0) {
        $allElems.css({color: 'red'})
    } else {
        $allElems.css({color: 'black'})
    }
}

/*===== event listeners =====*/

$addBtn.on('click', addValues);
$subtractBtn.on('click', subtractValues);
$input.on('click', clearInput);