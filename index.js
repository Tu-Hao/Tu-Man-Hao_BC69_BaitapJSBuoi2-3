// Bài 1: Tính tiền lương nhân viên
// 1. Khối Nhập Liệu (Input)
// Người dùng nhập số ngày làm việc.
// 2. Khối Xử Lý (Process)
// Lấy số ngày làm việc từ người dùng nhập.
// Kiểm tra tính hợp lệ của số ngày làm việc (phải là số và không âm).
// Nếu hợp lệ, tính tiền lương bằng cách nhân số ngày làm việc với lương một ngày (100.000 VND/ngày).
// 3. Khối Xuất Kết Quả (Output)
// Hiển thị kết quả tổng tiền lương.
// Nếu số ngày làm việc không hợp lệ, hiển thị thông báo lỗi.
document.getElementById("btnSoTienLuong").onclick = function () {
  let soNgayLam = document.getElementById("soNgayLam").value * 1;
  let theContainer = document.querySelector(".container");
  // tạo thẻ p để hiển thị thông báo
  let theP = document.createElement("p");
  let thePre = document.createElement("pre");
  theP.className = "bg-success bg-opacity-75 text-white p-3 w-25";
  thePre.className = "bg-danger bg-opacity-75 text-white p-3 w-25";
  // Xử lí với cấu trúc điều kiện if else
  //3 trường hợp người dùng nhập
  if (soNgayLam === 0) {
    // Người dùng nhập 0 hoặc ko nhập
    thePre.innerHTML = "Không làm mà đòi có lương -_-";
    theContainer.appendChild(thePre);
  } else if (isNaN(soNgayLam) || soNgayLam < 0) {
    // Người dùng nhập chữ hoặc số âm thay vì số dương
    thePre.innerHTML = "Vui lòng nhập số ngày làm hợp lệ.";
    theContainer.appendChild(thePre);
  } else {
    // Xử lý khi người dùng nhập đúng số ngày làm và xuất ra giá trị VND
    let tienLuong = soNgayLam * 100000;
    theP.innerHTML = `Bạn đã cày tổng cộng ${soNgayLam} ngày. Số tiền lương của bạn là ${tienLuong.toLocaleString(
      "vi",
      {
        style: "currency",
        currency: "VND",
      }
    )}`;
    theContainer.appendChild(theP);
  }
};
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Bài 2: Tính Giá Trị Trung Bình
// 1. Khối Nhập Liệu (Input)
// Thông tin đầu vào: 5 số thực (được nhập bởi người dùng).

// 2. Khối Xử Lý (Process)
// Nhận giá trị của 5 số từ các ô nhập liệu.
// Chuyển đổi các giá trị này thành số thực bằng parseFloat.
// Tính tổng của 5 số thực.
// Tính giá trị trung bình bằng công thức:
// trung bình = (Tổng 5 số) / 5

// 3. Khối Xuất Kết Quả (Output)
// Hiển thị giá trị trung bình của 5 số thực.

document.getElementById("btnTinhTrungBinh").onclick = function () {
  // parseFloat là một hàm trong JavaScript được sử dụng để chuyển đổi một chuỗi thành một số thực (floating-point number).
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  let number3 = parseFloat(document.getElementById("number3").value);
  let number4 = parseFloat(document.getElementById("number4").value);
  let number5 = parseFloat(document.getElementById("number5").value);
  let baiTap2 = document.querySelector(".baiTap2");
  let theP = document.createElement("p");
  let thePre = document.createElement("pre");
  theP.className = "bg-success bg-opacity-75 text-white p-3 w-25";
  thePre.className = "bg-danger bg-opacity-75 text-white p-3 w-25";
  if (isNaN(number1 + number2 + number3 + number4 + number5)) {
    thePre.innerHTML = "Vui lòng nhập vào số thực hợp lệ.";
    baiTap2.appendChild(thePre);
  } else {
    // Tính giá trị trung bình
    let sum = number1 + number2 + number3 + number4 + number5;
    let average = sum / 5;
    // Hiển thị kết quả
    theP.innerHTML = `Giá trị trung bình của 5 số là: ${average}`;
    baiTap2.appendChild(theP);
  }
};
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Bài 3: Quy đổi tiền USD sang VND
// 1. Khối Nhập Liệu (Input)
// Người dùng nhập vào số tiền USD.
// 2. Khối Xử Lý (Process)
// Lấy giá trị số tiền USD từ người dùng.
// Chuyển đổi giá trị này thành số thực.
// Tính số tiền sau quy đổi sang VND bằng cách nhân với tỷ giá hiện tại (23.500 VND/USD).
// 3. Khối Xuất Kết Quả (Output)
// Hiển thị số tiền sau khi quy đổi sang VND.
document.getElementById("btnSoTienQuyDoi").onclick = function () {
  // Tỷ giá hiện tại
  const tyGia = 23500;
  //Tạo thông báo kết quả quy đổi
  let baiTap3 = document.querySelector(".baiTap3");
  let theP = document.createElement("p");
  let thePre = document.createElement("pre");
  theP.className = "bg-success bg-opacity-75 text-white p-3 w-25";
  thePre.className = "bg-danger bg-opacity-75 text-white p-3 w-50";
  // Lấy giá trị số tiền USD từ người dùng
  let soTienUSD = parseFloat(document.getElementById("soTienUsd").value);

  // Kiểm tra xem người dùng có nhập vào giá trị hợp lệ hay không
  if (isNaN(soTienUSD) || soTienUSD <= 0) {
    thePre.innerHTML = "Vui lòng nhập vào một số tiền USD hợp lệ.";
    baiTap3.appendChild(thePre);
  } else {
    // Tính số tiền sau khi quy đổi sang VND
    let soTienVND = soTienUSD * tyGia;

    // Hiển thị kết quả
    theP.innerHTML = `Số tiền sau quy đổi là: ${soTienVND.toLocaleString(
      "vi-VN",
      {
        style: "currency",
        currency: "VND",
      }
    )}`;
    baiTap3.appendChild(theP);
  }
};
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//Bài 4: Tính Diện Tích và Chu Vi Hình Chữ Nhật
// 1. Khối Nhập Liệu (Input)
// Người dùng nhập vào chiều dài và chiều rộng của hình chữ nhật.
// 2. Khối Xử Lý (Process)
// Lấy giá trị chiều dài và chiều rộng từ người dùng.
// Chuyển đổi các giá trị này thành số thực.
// Tính diện tích bằng công thức: diện tích = dài * rộng.
// Tính chu vi bằng công thức: chu vi = (dài + rộng) * 2.
// 3. Khối Xuất Kết Quả (Output)
// Hiển thị diện tích và chu vi của hình chữ nhật.
document.getElementById("btnTinhToan").onclick = function () {
  // Lấy giá trị chiều dài và chiều rộng từ người dùng
  let chieuDai = parseFloat(document.getElementById("chieuDai").value);
  let chieuRong = parseFloat(document.getElementById("chieuRong").value);
  let theP = document.createElement("p");
  let thePre = document.createElement("pre");
  theP.className = "bg-success bg-opacity-75 text-white p-3 w-25";
  thePre.className = "bg-danger bg-opacity-75 text-white p-3 w-50";
  let baiTap4 = document.querySelector(".baiTap4");

  // Kiểm tra xem người dùng có nhập vào giá trị hợp lệ hay không
  if (isNaN(chieuDai) || chieuDai <= 0 || isNaN(chieuRong) || chieuRong <= 0) {
    thePre.innerHTML = "Vui lòng nhập vào chiều dài và chiều rộng hợp lệ.";
    baiTap4.appendChild(thePre);
  } else {
    // Tính diện tích
    let dienTich = chieuDai * chieuRong;

    // Tính chu vi
    let chuVi = (chieuDai + chieuRong) * 2;

    // Hiển thị kết quả
    theP.innerHTML = `Diện tích hình chữ nhật là: ${dienTich} m²<br>Chu vi hình chữ nhật là: ${chuVi} m`;
    baiTap4.appendChild(theP);
  }
};
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//Bài 5: Tính Tổng 2 Ký Số
// 1. Khối Nhập Liệu (Input)
// Người dùng nhập vào một số có 2 chữ số.
// 2. Khối Xử Lý (Process)
// Lấy giá trị số có 2 chữ số từ người dùng.
// Tách số hàng đơn vị và số hàng chục.
// Số hàng đơn vị: so_hang_dv = so % 10
// Số hàng chục: so_hang_chuc = Math.floor(so / 10)
// Tính tổng của 2 ký số: tong = so_hang_chuc + so_hang_dv
// 3. Khối Xuất Kết Quả (Output)
// Hiển thị tổng của 2 ký số.
document.getElementById("btnTinhTong").onclick = function () {
  // Lấy giá trị số có 2 chữ số từ người dùng
  // parseInt là một hàm trong JavaScript được sử dụng để chuyển đổi một chuỗi ký tự thành một số nguyên.
  let soChuc = parseInt(document.getElementById("soChuc").value);
  // hiển thị thông báo
  let theP = document.createElement("p");
  let thePre = document.createElement("pre");
  theP.className = "bg-success bg-opacity-75 text-white p-3 w-25";
  thePre.className = "bg-danger bg-opacity-75 text-white p-3 w-50";
  let baiTap5 = document.querySelector(".baiTap5");

  // Kiểm tra xem người dùng có nhập vào giá trị hợp lệ hay không
  if (isNaN(soChuc) || soChuc < 10 || soChuc > 99) {
    thePre.innerHTML = "Vui lòng nhập vào một số có 2 chữ số hợp lệ.";
    baiTap5.appendChild(thePre);
  } else {
    // Tách số hàng đơn vị và số hàng chục
    // Math.floor là một hàm trong JavaScript được sử dụng để làm tròn xuống số thực về số nguyên gần nhất nhỏ hơn hoặc bằng số đó.
    let so_hang_dv = Math.floor(soChuc % 10);
    let so_hang_chuc = Math.floor(soChuc / 10);

    // Tính tổng của 2 ký số
    let tong = so_hang_chuc + so_hang_dv;

    // Hiển thị kết quả
    theP.innerHTML = `Tổng của 2 ký số là: ${tong}`;
    baiTap5.appendChild(theP);
  }
};
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Bài 5 extra: Tính Tổng nhiều Ký Số
document.getElementById("btnTinhTongDaySo").onclick = function () {
  // Lấy giá trị số từ người dùng
  let soNguyen = document.getElementById("soNguyen").value;
  // hiển thị thông báo
  let theP = document.createElement("p");
  let thePre = document.createElement("pre");
  theP.className = "bg-success bg-opacity-75 text-white p-3 w-25";
  thePre.className = "bg-danger bg-opacity-75 text-white p-3 w-50";
  let baiTap5Extra = document.querySelector(".baiTap5Extra");
  let tong = 0;

  // Kiểm tra xem người dùng có nhập vào giá trị hợp lệ hay không
  if (isNaN(soNguyen) || soNguyen.trim() === "" || soNguyen < 0) {
    // soNguyen.trim() === '' là một đoạn mã trong JavaScript được sử dụng để kiểm tra xem chuỗi soNguyen có phải là một chuỗi rỗng hoặc chỉ chứa khoảng trắng hay không.
    thePre.innerHTML = "Vui lòng nhập vào một số hợp lệ.";
    baiTap5Extra.appendChild(thePre);
  } else {
    // Duyệt qua từng ký tự trong chuỗi
    for (let i = 0; i < soNguyen.length; i++) {
      //         Đoạn mã for (let i = 0; i < soNguyen.length; i++) là một vòng lặp for trong JavaScript. Đây là một cấu trúc lặp lại khối mã một số lần xác định, dựa trên điều kiện cho trước. Cụ thể, đoạn mã này dùng để duyệt qua từng ký tự của chuỗi soNguyen.

      // Giải Thích Chi Tiết
      // Khởi tạo biến lặp (let i = 0):

      // let i = 0: Biến i được khởi tạo với giá trị ban đầu là 0. Biến này sẽ được sử dụng như một chỉ số để truy cập từng ký tự của chuỗi soNguyen.

      // Điều kiện lặp (i < soNguyen.length):
      // i < soNguyen.length: Điều kiện này kiểm tra xem giá trị của i có nhỏ hơn độ dài của chuỗi soNguyen hay không. Nếu điều kiện này đúng, vòng lặp sẽ tiếp tục chạy. Nếu điều kiện này sai (nghĩa là i lớn hơn hoặc bằng soNguyen.length), vòng lặp sẽ dừng lại.

      // Tăng biến lặp (i++):
      // i++: Sau mỗi lần thực hiện khối mã bên trong vòng lặp, giá trị của i sẽ được tăng lên 1. Điều này đảm bảo rằng mỗi ký tự trong chuỗi soNguyen sẽ được xử lý tuần tự từ đầu đến cuối.

      // Ví Dụ Cụ Thể
      // Giả sử soNguyen là chuỗi "12345":

      // soNguyen.length là 5 (chuỗi này có 5 ký tự).
      // Vòng lặp for sẽ hoạt động như sau:
      // Lần 1: i = 0, i < 5 (đúng), thực hiện mã bên trong vòng lặp.
      // Lần 2: i = 1, i < 5 (đúng), thực hiện mã bên trong vòng lặp.
      // Lần 3: i = 2, i < 5 (đúng), thực hiện mã bên trong vòng lặp.
      // Lần 4: i = 3, i < 5 (đúng), thực hiện mã bên trong vòng lặp.
      // Lần 5: i = 4, i < 5 (đúng), thực hiện mã bên trong vòng lặp.
      // Lần 6: i = 5, i < 5 (sai), dừng vòng lặp.
      // Chuyển ký tự thành số nguyên và cộng vào biến tong
      tong += parseInt(soNguyen[i]);
    }

    // Hiển thị kết quả
    theP.innerHTML = `Tổng của các ký số là: ${tong}`;
    baiTap5Extra.appendChild(theP);
  }
};
