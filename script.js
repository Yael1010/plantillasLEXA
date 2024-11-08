let users = [
    { username: 'admin', password: 'admin' },
    { username: 'user1', password: '12345' },
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('user-form').style.display = 'block';
        document.getElementById('user-list').style.display = 'block';
        displayUsers();
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function displayUsers() {
    const userList = document.getElementById('users');
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.textContent = '${user.username}';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteUser(index);
        const modifyButton = document.createElement('button');
        modifyButton.textContent = 'Modificar';
        modifyButton.onclick = () => modifyUser(index);
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'user-actions';
        actionsDiv.appendChild(modifyButton);
        actionsDiv.appendChild(deleteButton);
        li.appendChild(actionsDiv);
        userList.appendChild(li);
    });
}

function addUser() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    users.push({ username, password });
    displayUsers();
}

function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
}

function modifyUser(index) {
    const username = prompt('Nuevo nombre de usuario', users[index].username);
    const password = prompt('Nueva contraseña', users[index].password);
    users[index] = { username, password };
    displayUsers();
}