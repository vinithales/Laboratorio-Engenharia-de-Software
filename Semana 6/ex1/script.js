document.addEventListener('DOMContentLoaded', function() {
    // Criação da estrutura da calculadora
    const body = document.body;
    body.className = 'd-flex justify-content-center align-items-center vh-100';
    
    const calculator = document.createElement('div');
    calculator.className = 'calculator';
    calculator.style.backgroundColor = 'rgb(88, 88, 88)';
    
    const display = document.createElement('input');
    display.type = 'text';
    display.className = 'form-control';
    display.id = 'display';
    display.disabled = true;
    calculator.appendChild(display);
    
    const row = document.createElement('div');
    row.className = 'row g-2';
    
    const buttons = [
        ['7', 'btn-secondary', 3],
        ['8', 'btn-secondary', 3],
        ['9', 'btn-secondary', 3],
        ['/', 'btn-warning', 3],
        ['4', 'btn-secondary', 3],
        ['5', 'btn-secondary', 3],
        ['6', 'btn-secondary', 3],
        ['*', 'btn-warning', 3],
        ['1', 'btn-secondary', 3],
        ['2', 'btn-secondary', 3],
        ['3', 'btn-secondary', 3],
        ['-', 'btn-warning', 3],
        ['0', 'btn-secondary', 3],
        ['.', 'btn-secondary', 3],
        ['=', 'btn-success', 3],
        ['+', 'btn-warning', 3],
        ['C', 'btn-danger', 12]
    ];
    
   
    const buttonElements = [];
    
    buttons.forEach(btnConfig => {
        const [text, btnClass, cols] = btnConfig;
        
        const col = document.createElement('div');
        col.className = `col-${cols}`;
        
        const button = document.createElement('button');
        button.className = `${btnClass} w-100`;
        button.textContent = text;
        
        col.appendChild(button);
        row.appendChild(col);
        buttonElements.push(button); 
    });
    
    calculator.appendChild(row);
    body.appendChild(calculator);
    
 
    let currentInput = '0';
    let previousInput = '';
    let operation = null;
    let resetInput = false;
    
    function updateDisplay() {
        display.value = currentInput;
    }
    
    function inputNumber(number) {
        if (currentInput === '0' || resetInput) {
            currentInput = number;
            resetInput = false;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }
    
    function inputDecimal() {
        if (resetInput) {
            currentInput = '0.';
            resetInput = false;
            updateDisplay();
            return;
        }
        
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay();
        }
    }
    
    function chooseOperation(op) {
        if (currentInput === '0' && previousInput !== '') {
            operation = op;
            return;
        }
        
        if (operation !== null) calculate();
        
        previousInput = currentInput;
        operation = op;
        resetInput = true;
    }
    
    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    currentInput = 'Erro';
                    updateDisplay();
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }
        
        currentInput = result.toString();
        operation = null;
        previousInput = '';
        updateDisplay();
    }
    
    function clearAll() {
        currentInput = '0';
        previousInput = '';
        operation = null;
        updateDisplay();
    }
    
    
    buttonElements.forEach(button => {
        const text = button.textContent;
        
        if (button.classList.contains('btn-secondary')) {
            if (text === '.') {
                button.addEventListener('click', inputDecimal);
            } else {
                button.addEventListener('click', () => inputNumber(text));
            }
        } else if (button.classList.contains('btn-warning')) {
            button.addEventListener('click', () => chooseOperation(text));
        } else if (button.classList.contains('btn-success')) {
            button.addEventListener('click', calculate);
        } else if (button.classList.contains('btn-danger')) {
            button.addEventListener('click', clearAll);
        }
    });
    

    updateDisplay();
});