//////////////////////Задание 1 ////////////////////////////////////

const request = new XMLHttpRequest();
request.open('GET', 'people.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.onload = () => {
    if (request.status === 200) {
        const people = JSON.parse(request.responseText);
        console.log(people)
        displayPeople(people);
    } else {
        console.error('Ошибка запроса:', request.status);
    }
};

// Функция для создания карточки человека
function createPersonCard(person) {
    const card = document.createElement("div");
    card.classList.add("card");

    const nameElement = document.createElement("p");
    nameElement.classList.add("name");
    nameElement.textContent = person.name;

    const ageElement = document.createElement("p");
    ageElement.classList.add("age");
    ageElement.textContent = `Age: ${person.age}`;

    card.appendChild(nameElement);
    card.appendChild(ageElement);

    return card;
}

// Функция для вывода карточек на страницу
function displayPeople(people) {
    const container = document.querySelector(".people");

    people.forEach((person) => {
        const card = createPersonCard(person);
        container.appendChild(card);
    });
}

//////////////////////Задание 2////////////////////////////////////
function makeRequest(url, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();

    request.onload = () => {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(data);
        } else {
            console.error('Ошибка запроса:', request.status);
        }
    };
}

makeRequest('students.json', (data2) => {
    console.log('Данные из students.json:', data2);
});

