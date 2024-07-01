const pageViews = document.getElementById('pageview-number');
const rangeInput = document.getElementById('input-range');
const price = document.getElementById('price-number');
const switchInput = document.querySelector('.input-switcher');
const duration = document.getElementById('duration-text');
const submitButton = document.querySelector('.container__submit-button');

const initialValue = 0; // Initial value for the range input

const value = [0, 25, 50, 75, 100];
const cost = [5, 10, 15, 20, 25]; 
const views = ['5K', '25K', '50K', '75K', '100K'];

switchInput.addEventListener('change', handleSwitchInput);
rangeInput.addEventListener('input', handleRangeInput);
submitButton.addEventListener('click', handleResetRange);

function handleSwitchInput() {
    plan(rangeInput.value);
}

function handleRangeInput(e) {
    const inputValue = e.target.value;
    rangeInput.style.background = `linear-gradient(
                                        to right,
                                        hsl(174, 77%, 80%) 0%,
                                        hsl(174, 77%, 80%) ${(inputValue * 100) / 100}%,
                                        hsl(224, 65%, 95%) 50%,
                                        hsl(224, 65%, 95%) 100%)`;
    plan(inputValue);
}

function handleResetRange() {
    rangeInput.value = initialValue;
    rangeInput.style.background = `linear-gradient(
                                        to right,
                                        hsl(174, 77%, 80%) 0%,
                                        hsl(174, 77%, 80%) ${(initialValue * 100) / 100}%,
                                        hsl(224, 65%, 95%) 50%,
                                        hsl(224, 65%, 95%) 100%)`;
    plan(initialValue);
}

function plan(inputValue) {
    for (let i = 0; i < value.length; i++) {
        if (inputValue >= value[i]) {
            pageViews.innerText = views[i];
            price.innerText = `$${(switchInput.checked ? cost[i] * .75 : cost[i]).toFixed(2)}`;
            duration.innerText = switchInput.checked ? '/ year' : '/ month';
        }
    }
}
