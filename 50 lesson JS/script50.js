/*
CRUD operation

c - CREATE [post]
r - READ [get]
u - UPDATE [patch, put]
d - DELETE [delete]

*/

const MOCK_API_URL = "https://67c9c0f6102d684575c36950.mockapi.io/users";

const usersContainer = document.querySelector("#users-container");
const createUserBtn = document.querySelector("#btn-create");
const editUserBtn = document.querySelector("#btn-edit");
const removeUserBtn = document.querySelector("#btn-remove");

let users = [];

createUserBtn.addEventListener("click", () => {createUsersAsync()});
editUserBtn.addEventListener("click", () => {editUsersAsync()});
removeUserBtn.addEventListener("click", () => {removeUsersAsync()});

// ----- Удаление пользователя ------

const removeUsersAsync = async () => {
    try {
        const ID = "1"; // в реальности всегда динамичное\
        
        const response = await fetch(`${MOCK_API_URL}/${ID}`, 
            {
            method: "DELETE"
        });

        if (response.status === 404) {
            throw new Error(`ID :${ID} не валидный`)
        }

        const deletedUser = await response.json();
        users = users.filter(user => user.id !== deletedUser.id);
        renderUsers();

        console.log("Пользователь удален!", error.massage)
    } catch (error) {
        console.log("Ошибка при удалении пользователя!", error.massage);
    }
};

// ----- Отрисовка всех пользователей ------
const renderUsers = () => {
    usersContainer.innerHTML = "";
    users.forEach(user => {
        const userWrapper = document.createElement("section");
        const userName = document.createElement("h3");
        const userCity = document.createElement("p");
        const userAvatar = document.createElement("img");

        userName.textContent = `Name: ${user.name}`;
        userCity.textContent = `User city: ${user.city}`;
        userAvatar.src = user.avatar;

        userWrapper.append(userName, userAvatar, userCity);
        usersContainer.append(userWrapper);
    });
}

// ----- Изменение существующих пользователей ------

const editUsersAsync = async () => {
    try {
        const ID = "2"; // в реальности всегда динамичное\
        
        const response = await fetch(`${MOCK_API_URL}/${ID}`, {
            method: "PUT",
            body: JSON.stringify( {
                name: "Nikolay",
                city: "Berlin",
                avatar: "https://avatars.mds.yandex.net/get-ott/1672343/2a00000169e7571b0993232db73c3cd8/orig"
            }),
            headers:{
                "Content-type": "application/json"
            }
        });
        const editedUser = await response.json();

        users = users.map((user) => {
            if(user.id === editedUser.id) {
                return editedUser;
            }
            return user;
        });
        renderUsers();

        console.log("Новый пользователь изменен!", error.massage)
    } catch (error) {
        console.log("Ошибка при изменении пользователя!", error.massage);
    }
};

// ----- Получение всех пользователей ------
const getUsersAsync = async () => {
    try {
        console.log("Старт процесса!")

        const response = await fetch(MOCK_API_URL);
        users = await response.json();

        renderUsers();
    } catch (error) {
        console.log("Пойманная ошибка процесса!", error.massage)
    } finally {
        console.log("Финиш процесса!");
    };
};

// ----- Создание нового пользователей ------
const createUsersAsync = async () => {
    try {
        const response = await fetch(MOCK_API_URL, {
            method: "POST",
            body: JSON.stringify( {
                name: "Elena",
                city: "Tashkent",
                avatar: "https://avatars.mds.yandex.net/get-ott/1672343/2a00000169e7571b0993232db73c3cd8/orig"
            }),
            headers:{
                "Content-type": "application/json"
            }
        });
        const newCreatedUser = await response.json();

        users.unshift(newCreatedUser);
        renderUsers();

        console.log("Новый пользователь создан!", error.massage)
    } catch (error) {
        console.log("Ошибка при создании нового пользователь!", error.massage);
    }
};

getUsersAsync();
