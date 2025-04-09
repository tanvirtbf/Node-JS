// === Style Injection ===
const style = document.createElement('style');
style.textContent = `
    body {
        font-family: 'Poppins', sans-serif;
        background-color: #f0f4f8;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }

    .container {
        background-color: #fff;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        width: 400px;
        text-align: center;
    }

    h1 {
        color: #333;
        margin-bottom: 20px;
    }

    form div {
        margin-bottom: 15px;
        text-align: left;
    }

    label {
        font-weight: 500;
        margin-bottom: 5px;
        display: block;
    }

    input[type="url"],
    input[type="text"] {
        width: 100%;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 1rem;
    }

    button {
        background-color: #4a90e2;
        color: #fff;
        padding: 14px 20px;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #357ac9;
    }

    h2 {
        color: #555;
        margin-top: 30px;
    }

    ul {
        list-style: none;
        padding: 0;
    }
`;
document.head.appendChild(style);

// === Create HTML Structure ===
const container = document.createElement('div');
container.className = 'container';

const heading = document.createElement('h1');
heading.textContent = 'Submit Your Info';

const form = document.createElement('form');

const nameDiv = document.createElement('div');
const nameLabel = document.createElement('label');
nameLabel.textContent = 'Your Name';
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Enter your name';
nameDiv.appendChild(nameLabel);
nameDiv.appendChild(nameInput);

const urlDiv = document.createElement('div');
const urlLabel = document.createElement('label');
urlLabel.textContent = 'Your Website';
const urlInput = document.createElement('input');
urlInput.type = 'url';
urlInput.placeholder = 'https://yourwebsite.com';
urlDiv.appendChild(urlLabel);
urlDiv.appendChild(urlInput);

const button = document.createElement('button');
button.textContent = 'Submit';

form.appendChild(nameDiv);
form.appendChild(urlDiv);
form.appendChild(button);

container.appendChild(heading);
container.appendChild(form);
document.body.appendChild(container);
