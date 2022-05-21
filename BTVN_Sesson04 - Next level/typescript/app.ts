import { ConNguoi } from "./ConNguoi";
import { SinhVien } from "./SinhVien";
import { NhanVien } from "./NhanVien";


var cn1 = new ConNguoi("Thien", 18, 1, "Chuongg My");
cn1.hienThiThongTin();
var cn2 = new ConNguoi("JinD", 22, 3, "Hanoii");
cn2.hienThiThongTin();

var sv1 = new SinhVien('Thien', 18, 1, 'Ha Noi', 'B9220', 9, 9, 9);
sv1.showSV();
var sv2 = new SinhVien('Tu', 18, 1, 'Ha Noi', 'B92312', 4, 4, 4);
sv2.showSV();

var nv1 = new NhanVien('Thien', 18, 1, 'Ha Noi', 'b9220', 500000, 30);
nv1.showNV();
var nv2 = new NhanVien('Tu', 19, 2, 'nam Dinh', 'b2938123', 500000, 10);
nv2.showNV()