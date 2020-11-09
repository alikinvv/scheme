// change apartments floor
$('body').on('click', '.apartments__navigation span', (e) => {
    $('.apartments__navigation span').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('.apartments__slide').removeClass('active');
    $(`.apartments__slide[data-floor="${$(e.currentTarget).text()}"]`).addClass('active');
});

let room = {
    number: '',
    title: '',
    image: '',
};

// open apartments modal
$('body').on('click', '.apartments__slide svg > *:not(image)', (e) => {
    if ($('.apartments__modal').length === 0) {
        $('body').append(`
            <div class="apartments__modal">
                <div class="apartments__content">
                    <div class="apartments__header">
                        <div class="apartments__title"></div>
                        <div class="apartments__close"></div>
                    </div>
                    <div class="apartments__body">
                        <div class="apartments__image"></div>
                    </div>
                </div>
            </div>
        `);
    }
    
    room.number = $(e.currentTarget).attr('data-image');

    customFields(room);

    $('.apartments__image').css('background-image', `url("${room.image}")`);
    $('.apartments__title').text(room.title);

    $('.apartments__modal').addClass('active');
});

// close apartment modal
$('body').on('click', '.apartments__close', () => {
    $('.apartments__modal').removeClass('active');
});

// close apartments modal on ESC key
$(document).keyup((e) => {
    if (e.keyCode === 27 && $('.apartments__modal').hasClass('active')) $('.apartments__modal').removeClass('active'); // esc
});

// for custom fields in apartments modal
let customFields = (room) => {
    switch (room.number) {
        case 'Мансарда 1-1':
            room.title = `Мансарда 1`;
            room.image = `img/rooms/m1.jpg`;
            break;
        case 'Мансарда 2-1':
            room.title = `Мансарда 2`;
            room.image = `img/rooms/m2.jpg`;
            break;
        default:
            room.title = `Квартира ${room.number}`;
            room.image = `img/rooms/${room.number}.jpg`;
            break;
    }
}