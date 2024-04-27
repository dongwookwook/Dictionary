const computer = [
    {
        id: 1,
        name: '마우스 : 2차원 평면에서의 움직임을 컴퓨터에 전송해 주는 입력장치.',
        url: '마우스.PNG'
    },
    {
        id: 2,
        name: '키보드 : 컴퓨터에서 문자를 입력하는 장치.',
        url: '키보드.PNG'
    },
    {
        id: 3,
        name: '모니터 : 영상을 표시해주는 디스플레이 출력 장치.',
        url: '모니터.PNG'
    },
    {
        id: 4,
        name: '스피커 : 전기음향신호를 음파로 변환하는 장치.',
        url: '스피커.PNG'
    },
]

const list = document.getElementById('list');

function showList(val='') {
    list.innerHTML = '';
    const res = computer.forEach(computer => {
        if(computer.name.includes(val)) {
            const li = document.createElement('li');
            li.innerHTML = `
             <img src ='${computer.url}' alt='${computer.name}'>
             <p>${computer.name}</p>
            `
            list.appendChild(li);
        }
    })
}

showList();

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const val = searchInput.value;
    console.log(val);
    showList(val);
})