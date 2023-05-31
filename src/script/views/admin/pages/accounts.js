import registerUserInAdmin from '../../../utils/addAccount';
import dataAccount from '../../../utils/dataAccounts';
import deleteAccount from '../../../utils/deleteAccounts';

/* eslint-disable no-undef */
const AccountsAdmin = {

  async render() {
    return `
    <div class="mb-3" >
    <button type="button" class="btn btn-primary btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Tambah Akun</button>
    </div>
    
      <section class="section accounts">
      <div class="card">
      <div class="card-body">
      <h5 class="card-title">Akun Penjual</h5>
      <div class="col align-middle">
      <div class="table-responsive">
      <table class="table table-hover" id="buyerSeller">
  <thead>
    <tr class="table-secondary">
      <th scope="col">#</th>
      <th scope="col" class="no-sort">Avatar</th>
      <th scope="col">Nama Lengkap</th>
      <th scope="col">Nomor HP</th>
      <th scope="col">Username</th>
      <th scope="col" class="no-sort">Action</th>
    </tr>
  </thead>
  <tbody class="align-middle" id="body-seller">
  </tbody>
</table>
</div>
</div>
</div>
</section>

<section class="section accounts">
      <div class="card">
      <div class="card-body">
      <h5 class="card-title">Akun Pembeli</h5>
      <div class="table-responsive">
      <table class="table table-hover" id="buyerTable">
  <thead>
    <tr class="table-secondary">
      <th scope="col">#</th>
      <th scope="col" class="no-sort">Avatar</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Username</th>
      <th scope="col" class="no-sort">Action</th>
    </tr>
  </thead>
  <tbody class="align-middle" id="body-buyer">
  </tbody>
</table>
</div>
</div>
</div>
</section>

<!-- Modal Register akun -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content" id="form-register">
                <form action="#" id="register" method="post">
                    <div class="modal-header border-0 border-top border-4 border-primary">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Daftar sebagai</h1>
                        <div class="col-4 ms-3">
                            <select class="form-select" name="user" id="userRole" required aria-label="seller or buyer">
                                <option value="seller">Penjual</option>
                                <option value="buyer">Pembeli</option>
                            </select>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body border-top border-1">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="emailRegister" class="form-label">Email <span
                                            class="text-danger">*</span></label>
                                    <input type="email" required name="emailRegister" class="form-control" id="emailRegister"
                                        placeholder="rtproject@gmail.com">
                                </div>
                                <div class="mb-3">
                                    <label for="nama_lengkap" class="form-label">Nama Lengkap <span
                                            class="text-danger">*</span></label>
                                    <input type="text" required name="nama_lengkap" class="form-control"
                                        id="nama_lengkap" placeholder="Masukkan Nama Lengkap">
                                </div>
                                <div class="mb-3">
                                    <label for="provinsi" class="form-label">Provinsi <span
                                            class="text-danger">*</span></label>
                                    <select class="form-select" id="datalistOptions" name="provinsi" aria-label="Pilih Provinsi" required>
                                    <option data-idprov="null" value="null" disabled selected>Pilih Provinsi</options>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="kabupaten" class="form-label">Kabupaten/Kota <span
                                            class="text-danger">*</span></label>
                                    <select class="form-select" id="kabupatenData" name="kabupaten" aria-label="Pilih Kabupaten/Kota" required>
                                        <option data-idcity="null" value="null" disabled selected>Pilih Kab/Kota</options>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="kecamatan" class="form-label">Kecamatan <span
                                            class="text-danger">*</span></label>
                                    <textarea name="kecamatan" class="form-control" id="kecamatan" rows="1"
                                        placeholder="Kecamatan" required></textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="no_hp_wa" class="form-label">Nomor HP/WA <span
                                            class="text-danger">*</span></label>
                                    <input type="number" required name="no_hp_wa" class="form-control" id="no_hp_wa"
                                        placeholder="Nomor Hp/WhatsApp">
                                </div>
                                <div class="mb-3">
                                    <label for="tgl_lahir" class="form-label">Tanggal Lahir <span
                                            class="text-danger">*</span></label>
                                    <input type="date" required name="tgl_lahir" class="form-control" id="tgl_lahir">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password <span
                                            class="text-danger">*</span></label>
                                    <input type="password" required name="password" class="form-control" id="password">
                                </div>
                                <div class="mb-3">
                                    <label for="password_confirm" class="form-label">Password confirm <span
                                            class="text-danger">*</span></label>
                                    <input type="password" required name="password_confirm" class="form-control"
                                        id="password_confirm">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" id="btn-submit" class="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <form action="#" id="login" method="post" style="display: hidden;">
    </form>

          `;
  },

  async afterRender() {
    console.log('afterrender accounts');

    const bodyBuyer = document.querySelector('#body-buyer');
    const bodySeller = document.querySelector('#body-seller');

    const fetchedDataAccount = await dataAccount._fetchAllDataAccount();
    console.log(fetchedDataAccount);
    let numberCountSeller = 1;
    let numberCountBuyer = 1;

    fetchedDataAccount.forEach((d) => {
      const data = d.data();
      data.id = d.id;
      if (data.user.toLowerCase() === 'seller') {
        bodySeller.innerHTML += `<tr class="profile-card">
        <th scope="row">${numberCountSeller}</th>
        <td><img src="" class="rounded-circle img-fluid" alt="Profile" style="max-width: 40px;" id='profilepic${data.id}'></td>
        <td>${data.namalengkap}</td>
        <td>${data.no_hp_wa}</td>
        <td>${data.email}</td>
        <td><a href="#/editAkun/${data.id}" role="button" class="btn btn-outline-secondary"> Edit </a> <button type="button" class="btn btn-outline-danger" id="deleteAkun" data-id="${data.id}">Del</button></td>
      </tr>`;
        numberCountSeller += 1;
      } if (data.user.toLowerCase() === 'buyer') {
        bodyBuyer.innerHTML += `<tr>
        <th scope="row">${numberCountBuyer}</th>
        <td><img src="" class="rounded-circle img-fluid" alt="profilepic" style="max-width: 40px;" id='profilepic${data.id}'></td>
        <td>${data.namalengkap}</td>
        <td>${data.no_hp_wa}</td>
        <td>${data.email}</td>
        <td><a href="#/editAkun/${data.id}" role="button" class="btn btn-outline-secondary"> Edit </a> <button type="button" class="btn btn-outline-danger" id="deleteAkun" data-id="${data.id}">Del</button></td>
      </tr>`;
        numberCountBuyer += 1;
      }
      const profilepic = `profilepic${data.id}`;
      if (data.fotoprofile) {
        document.getElementById(profilepic).setAttribute('src', data.fotoprofile);
      } else {
        document.getElementById(profilepic).setAttribute('src', '../../assets/img/profile-img.png');
      }
    });

    // register
    const datalist = document.querySelector('#datalistOptions');
    const datalistKab = document.querySelector('#kabupatenData');
    // const inputprovinsi = document.querySelector('#provinsi');
    let provinsiId = '';

    try {
      const response = await fetch('https://proud-erin-parrot.cyclic.app/provinsi', {
        method: 'GET',
        headers: {
          key: 'a8be5cd808491d7418dd4b76b7884dc6',
        },
      });
      const responseJson = await response.json();

      const dataProvinsi = responseJson.rajaongkir.results;
      dataProvinsi.forEach((d) => {
        datalist.innerHTML += `<option data-idprov="${d.province_id}" value="${d.province}">${d.province}</option>`;
      });
    } catch (error) {
      console.log(error);
    }

    datalist.addEventListener('change', async () => {
    //   provinsi = $('#provinsi').val(); // mengambil value dari input
    //   provinsiId = $(`#datalistOptions option[value='${provinsi}']`).attr('data-idprov');
      // ^ mencari atribut pada datalist (<option data-idprov="2" value="dua">) menggunakan bantuan value (DATALIST)

      provinsiId = $('#datalistOptions').find(':selected').attr('data-idprov');

      try {
        const response = await fetch(`https://proud-erin-parrot.cyclic.app/kota?provId=${provinsiId}`, {
          method: 'GET',
          headers: {
            key: 'a8be5cd808491d7418dd4b76b7884dc6',
          },
        });
        const responseJson = await response.json();

        const dataKota = responseJson.rajaongkir.results;
        datalistKab.innerHTML = '';
        datalistKab.innerHTML += '<option data-idcity="null" value="null" disabled selected>Pilih Kab/Kota</options>';
        dataKota.forEach((d) => {
          datalistKab.innerHTML += `<option data-idcity="${d.city_id}" value="${d.city_name}">${d.type} ${d.city_name}</option>`;
        });
      } catch (error) {
        console.log(error);
      }
    });

    await registerUserInAdmin.init();

    // delete
    await deleteAccount.init();

    $('#buyerTable').DataTable({
      // eslint-disable-next-line quotes
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });

    $('#buyerSeller').DataTable({
      // eslint-disable-next-line quotes
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });
  },
};

export default AccountsAdmin;
