// 设置body的高度为窗口的高度
document.body.style.height = window.innerHeight + 'px';

// 获取Joker按钮和Joker图片元素
const jokerButton = document.querySelector('.joker-button');
const jokerImageSrc = 'https://i.loli.wiki/public/240609/joker.png';
let jokerImage = document.querySelector('.joker-emoji');

// 获取句子元素和句子列表
let juzi = document.querySelector('.juzi');
const juziList = [
    '如果你觉得累，其实告别并没有错',
    '爱和自由不能共存，如果你喜欢自由，那我放你走',
    '这一生漫长崎岖，总有一些人消失在生活里，却刻骨铭心的住在心里',
    '有些人，在一生里注定原本是个过客，却偏偏变成记忆中的常客',
    '自己想都没想到，这么丢三落四的我，居然还会记得你这么久',
    '如果你觉得累，其实告别并没有错',
    '在我的剧本里，你永远是主角，冰块握久了，连凉水都觉得温暖'
];

// 声明计时器变量
let time1;

// 定义设置句子的函数
const setJuzi = (array) => {
    juzi.innerHTML = array[Math.floor(Math.random() * (array.length - 1))];
}

// 绑定点击事件
jokerButton.onclick = () => {
    // 设置Joker图片源
    jokerImage.src = jokerImageSrc;

    // 设置句子
    setJuzi(juziList);

    // 启动新的计时器
    time1 = setTimeout(() => {
        jokerImage.src = jokerImageSrc;
    }, 2800);

    // 清除计时器
    if (time1) {
        clearTimeout(time1);
    }
};
