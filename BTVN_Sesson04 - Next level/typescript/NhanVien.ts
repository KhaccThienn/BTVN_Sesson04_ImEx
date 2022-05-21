import { ConNguoi } from './ConNguoi';
export class NhanVien extends ConNguoi {
    mnv: string;
    luongCB: number;
    soNgayCong: number;

    constructor(
        ten: string,
        tuoi: number,
        gioiTinh: number,
        diaChi: string,
        mnv: string,
        luongCB: number,
        soNgayCong: number
    ) {
        super(ten, tuoi, gioiTinh, diaChi);
        super.checkGt();
        this.mnv = mnv;
        this.luongCB = luongCB;
        this.soNgayCong = soNgayCong;
    }

    tinhLuong(): number {
        return this.luongCB * this.soNgayCong;
    }

    rankingSalary(): string {
        var salary = this.tinhLuong();

        if (salary < 7000000) {
        return "Nhan Vien Cui Bap";
        } else if (salary < 10000000) {
        return "Nhan Vien Binh Dan";
        } else {
        return "Can Bo Cao Cap";
        }
    }

    showNV(): void {
        var tbody_nv = document.getElementById("tbody-list-emp");
        tbody_nv.innerHTML += `
                <tr>
                    <td>${this.mnv}</td>
                    <td>${this.ten}</td>
                    <td>${this.tuoi}</td>
                    <td>${this.checkGt()}</td>
                    <td>${this.diaChi}</td>
                    <td>${this.soNgayCong}</td>
                    <td>${this.luongCB}</td>
                    <td>${this.tinhLuong()}</td>
                    <td>${this.rankingSalary()}</td>
                </tr>
            `;
    }
}
