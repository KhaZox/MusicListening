const messages= [
        { icon: '<i class="bi bi-house-door-fill"></i>', message: 'Trang chủ'},
        { icon: '<i class="bi bi-collection-play-fill"></i>', message: 'Shorts' },
        { icon: '<i class="bi bi-boombox-fill"></i>', message: 'Kênh đăng ký' },
        { title:true, messageTitle: 'Bạn >>', href: 'me/videos'},
        { icon: '<i class="bi bi-person-video"></i>', message: 'Kênh của bạn', href:'youtube/create' },
        { icon: '<i class="bi bi-stopwatch"></i>', message: 'Video đã xem' },
        { icon: '<i class="bi bi-film"></i>', message: 'Video của bạn' },
        { icon: '<ion-icon name="time-outline"></ion-icon>', message: 'Xem sau' },
        { icon: '<i class="bi bi-hand-thumbs-up"></i>', message: 'Video đã thích' },
        { title: true, messageTitle: 'Kênh đăng ký', href: ''},
        { title: true, messageTitle: 'Khám phá', href: ''},
        { icon: '<ion-icon name="flame-outline"></ion-icon>', message: 'Thịnh hành'},
        { icon: '<i class="bi bi-music-note"></i>', message: 'Âm nhạc' },
        { icon: '<ion-icon name="game-controller-outline"></ion-icon>', message: 'Trò chơi' },
        { icon: '<ion-icon name="newspaper-outline"></ion-icon>', message: 'Tin tức' },
        { icon: '<ion-icon name="trophy-outline"></ion-icon>', message: 'Thể thao' },
        { title: true, messageTitle: 'Dịch vụ khác của YouTube'},
        { icon: '<ion-icon name="logo-youtube"></ion-icon>', message: 'YouTube Premium' },
        { icon: '<ion-icon name="logo-youtube"></ion-icon>', message: 'YouTube Studio' },
        { icon: '<ion-icon name="logo-youtube"></ion-icon>', message: 'YouTube Music' },
        { icon: '<ion-icon name="logo-youtube"></ion-icon>', message: 'YouTube Kids' },
        { icon: '<ion-icon name="settings-outline"></ion-icon>', message: 'Cài đặt'},
        { icon: '<ion-icon name="flag-outline"></ion-icon>', message: 'Nhật ký báo cáo' },
        { icon: '<ion-icon name="help-circle-outline"></ion-icon>', message: 'Trợ giúp' },
        { icon: '<ion-icon name="chatbubble-ellipses-outline"></ion-icon>', message: 'Gửi ý kiến phản hồi' },
    ]
const loadSlide = (req, res, next) => {
    res.locals.dataSlide = messages;
    next();
};
module.exports=  loadSlide