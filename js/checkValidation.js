function SubmitForm() {
    // Kiểm tra tên đăng nhập
    var username = document.forms["forml"]["txtdn"].value;
    if (username === "") {
        alert("Vui lòng nhập tên đăng nhập");
        return false;
    }

    // Kiểm tra họ và tên
    var fullname = document.forms["forml"]["txtHT"].value;
    var fullnamePattern = /^[a-zA-Z\s_.]+$/;
    if (!fullnamePattern.test(fullname)) {
        alert("Họ và tên chỉ được chứa chữ cái, dấu gạch dưới, dấu chấm và khoảng trắng");
        return false;
    }

    // Kiểm tra mật khẩu
    var password = document.forms["forml"]["txtMK"].value;
    if (password === "") {
        alert("Vui lòng nhập mật khẩu");
        return false;
    }
    
    // Kiểm tra mật khẩu phải có ít nhất 8 ký tự và bao gồm ít nhất một chữ cái và một chữ số
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Mật khẩu phải có ít nhất 8 ký tự và bao gồm ít nhất một chữ cái và một chữ số");
        return false;
    }

    // Kiểm tra nhập lại mật khẩu
    var confirmPassword = document.forms["forml"]["txtXNMK"].value;
    if (confirmPassword === "") {
        alert("Vui lòng nhập lại mật khẩu");
        return false;
    }
    
    // Kiểm tra mật khẩu và nhập lại mật khẩu phải trùng khớp
    if (password !== confirmPassword) {
        alert("Mật khẩu và nhập lại mật khẩu không khớp");
        return false;
    }

    // Lưu thông tin tài khoản vào Local Storage
    var account = {
        username: username,
        fullname: fullname
    };
    localStorage.setItem('account', JSON.stringify(account));

    // Hiển thị thông tin từ Local Storage
    ShowAccount();

    return true;
}

function ShowAccount() {
    var accountData = localStorage.getItem('account');
    if (accountData) {
        var account = JSON.parse(accountData);
        var localStoreDiv = document.getElementById('localStore');
        localStoreDiv.innerHTML = "Tên đăng nhập: " + account.username + "<br>" +
                                  "Họ và tên: " + account.fullname;
    }
}