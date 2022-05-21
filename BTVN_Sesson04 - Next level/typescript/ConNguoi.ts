export class ConNguoi {
    ten: string;
    tuoi: number;
    gioiTinh: number;
    diaChi: string;

    constructor(ten: string, tuoi: number, gioiTinh: number, diaChi: string) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioiTinh = gioiTinh;
        this.diaChi = diaChi;
    }

    checkGt(): string {
        if (this.gioiTinh == 1) {
        return "Nam";
        } else if (this.gioiTinh == 2) {
        return "Nu";
        } else {
        return "Bede";
        }
    }

    hienThiThongTin(): void {
        var tbody = document.getElementById("tbody-list");
        tbody.innerHTML += `
                <tr>
                    <td>${this.ten}</td>
                    <td>${this.tuoi}</td>
                    <td>${this.checkGt()}</td>
                    <td>${this.diaChi}</td>
                </tr>
            `;
    }
}
