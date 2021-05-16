let i = 0;
const data = [
    {
        url: '/assets/img/chicago.jpg',
        heading: 'Chicago',
        desc: 'Thank you, Chicago - A night we won\'t forget',
    },
    {
        url: '/assets/img/la.jpg',
        heading: 'Los Angeles',
        desc: 'We had the best time playing at Venice Beach!',
    },
    {
        url: '/assets/img/ny.jpg',
        heading: 'New York',
        desc: 'The atmosphere in New York is lorem ipsum.',
    },
];
setInterval(() => {
    document.getElementById(
        'slider'
    ).style.background = `url('${data[i].url}') top center / cover no-repeat`;
    document.querySelector('#slider .text-content .text-heading').textContent =
        data[i].heading;
    document.querySelector('#slider .text-content .text-desc').textContent =
        data[i].desc;
    i++;
    if (i >= data.length) {
        i = 0;
    }
}, 2000);
