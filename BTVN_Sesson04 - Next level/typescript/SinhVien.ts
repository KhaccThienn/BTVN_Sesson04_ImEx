import { ConNguoi } from "./ConNguoi";
export class SinhVien extends ConNguoi {
    msv: string;
    diemToan: number;
    diemLy: number;
    diemHoa: number;

    constructor(
        ten: string,
        tuoi: number,
        gioiTinh: number,
        diaChi: string,
        msv: string,
        diemToan: number,
        diemLy: number,
        diemHoa: number
    ) {
        super(ten, tuoi, gioiTinh, diaChi);
        super.checkGt();
        this.msv = msv;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }

    calcAvg(): number {
        return (this.diemToan + this.diemLy + this.diemHoa) / 3;
    }

    ranking(): string {
        let avg = this.calcAvg();

        if (avg < 5) {
        return "Kem";
        } else if (avg >= 5 && avg < 8) {
        return "Kha";
        } else {
        return "Gioi";
        }
    }

    showSV(): void {
        var tbody_sv = document.getElementById("tbody-list-sv");

        tbody_sv.innerHTML += `
                <tr>
                    <td>${this.msv}</td>
                    <td>${this.ten}</td>
                    <td>${this.tuoi}</td>
                    <td>${this.checkGt()}</td>
                    <td>${this.diaChi}</td>    
                    <td>${this.diemToan}</td>
                    <td>${this.diemLy}</td>
                    <td>${this.diemHoa}</td>
                    <td>${this.calcAvg().toFixed(2)}</td>
                    <td>${this.ranking()}</td>
                </tr>
            `;
    }
}
