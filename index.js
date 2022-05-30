
var produkList = [
    {
        id: 1,
        nama: 'Jet Tempur',
        stok: 10
    },
    {
        id: 2,
        nama: 'Nuklir Hiroshima',
        stok: 1
    },
    {
        id: 3,
        nama: 'Infinity Stone',
        stok: 6
    },
    {
        id: 4,
        nama: 'Burj Khalifa',
        stok: 5
    },
    {
        id: 5,
        nama: 'Rudal Hipersonik',
        stok: 3
    }
];

var pesanan = {
    id: [],
}

function checkIdPesanan(id) {
    var found = false;
    for (var i = 0; i < pesanan.id.length; i++) {
        if (pesanan.id[i] == id) {
            found = true;
            break;
        }
    }
    return found;
}

function addListProduk() {
    var result = "";
    for (var i = 0; i < produkList.length; i++) {
        if (checkIdPesanan(produkList[i].id)) {
            continue;
        }
        result += `
                <option value="${produkList[i].id}">${produkList[i].nama}</option>
            `;
    }
    return result;
}

function getProduk(id, idClass) {
    pesanan.id.push(id);
    if (pesanan.id.length == 5) {
        $("#tambahProduk").hide();
    }
    document.getElementById("jumlah" + idClass).max = 5;
}

$(document).ready(function () {
    $("#tambahProduk").click(function () {
        let produkList = "";
        produkList += `<div class="row">
                                <div class="col-md-6 form-group">
                                    <select class="form-control" id="produk" name="produk" onchange="getProduk(this.value);">
                                        <option>Pilih Produk</option>
                                        ${addListProduk()}</select>
                                </div>
                                <div class="col-md-6 form-group">
                                    <input type="number" class="form-control" id="jumlah" name="jumlah" placeholder="Jumlah">
                                </div>
                            </div>`;
        if (pesanan.id.length < 5) {
            $("#produklist").append(produkList);
            console.log(pesanan.id);
        }
        if (pesanan.id.length == 5) {
            $("#tambahProduk").hide();
        }
    });

});
