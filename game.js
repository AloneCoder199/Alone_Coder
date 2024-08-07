document.getElementById('runCode').addEventListener('click', function() {
    const userCode = document.getElementById('codeInput').value;
    let output = '';

    try {
        // Execute user code safely
        // Note: Using eval() is not recommended in production due to security risks
        // Consider using a sandboxed environment for executing user code
        output = eval(userCode);
    } catch (error) {
        output = `Error: ${error.message}`;
    }

    document.getElementById('output').textContent = output;
});
