const data = {
    accountGoogle:[
        { icon: '<ion-icon name="logo-google"></ion-icon>', message: 'Tài  khoản Google'},
        { icon: '<i class="bi bi-person-square"></i>', message: 'Chuyển đổi tài khoản' },
        { icon: '<ion-icon name="log-in-outline"></ion-icon>', message: 'Đăng xuất' },
    ],
    accountYoutube:[
        { icon: '<ion-icon name="logo-youtube"></ion-icon>', message: 'Youtube Studio' },
        { icon: '<i class="bi bi-coin"></i>', message: 'Giao dịch và mua gói thành viên' },
    ],
    accountPersonApp:[
        { icon: '<i class="bi bi-person-badge"></i>', message: 'Dữ liệu của bạn trong Youtube' },
        { icon: '<ion-icon name="moon-outline"></ion-icon>', message: 'Giao diện' },
        { icon: '<ion-icon name="language-outline"></ion-icon>', message: 'Ngôn ngữ' },
        { icon: '<i class="bi bi-shield"></i>', message: 'Chế độ hạn chế' },
        { icon: '<ion-icon name="globe-outline"></ion-icon>', message: 'Địa điểm' },
        { icon: '<i class="bi bi-keyboard"></i>', message: 'Phím tắt' },
    ],
    accountSetting:[
        { icon: '<ion-icon name="settings-outline"></ion-icon>', message: 'Cài đặt' },
    ],
    accountHelp:[
        { icon: '<i class="bi bi-question-circle"></i>', message: 'Trợ giúp' },
        { icon: '<i class="bi bi-chat-left-text"></i>', message: 'Gửi ý kiến phản hồi' },
    ]
};
const loadHeaderData = (req, res, next) => {
    res.locals.dataAccount = data;
    next();
};

// module.exports = {
//     loadHeaderData,
// };
module.exports = loadHeaderData;
