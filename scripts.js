
$(document).ready(function () {
  $('#slider').carousel({
    interval: 2000
  });
});


document.getElementById('mask-order-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var amount = document.getElementById('Amount').value;
  var maskType = document.getElementById('mask-type').value;

  var features = [];
  var checkboxes = document.querySelectorAll('input[name="features"]:checked');
  checkboxes.forEach(function(checkbox) {
      features.push(checkbox.value);
  });

  if (name && amount && maskType) {
      const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
      });

      swalWithBootstrapButtons.fire({
          title: 'MASTIIN AJE GAS GA NI?',
          html: `
              <div class="form-values">
                  <div class="form-group">
                      <label style="width: 130px;">Nama : </label>
                      <input type="text" value="${name}" readonly class="form-control" />
                  </div>
                  <div class="form-group">
                      <label style="width: 130px;">Jumlah :</label>
                      <input type="text" value="${amount}" readonly class="form-control" />
                  </div>
                  <div class="form-group">
                      <label style="width: 130px;">Jenis Masker :</label>
                      <input type="text" value="${maskType}" readonly class="form-control" />
                  </div>
                  <div class="form-group">
                      <label style="width: 130px;">Fitur Tambahan :</label>
                      <input type="text" value="${features.join(', ')}" readonly class="form-control" />
                  </div>
              </div>
          `,
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'YES, BELII OS!',
          cancelButtonText: 'NANTI, GAADA UIT!',
          reverseButtons: true
      }).then((result) => {
          if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                  title: 'ASIK BELI!',
                  text: 'Sabar yee pesenanlu dateng ntar.',
                  icon: 'success'
              });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire({
                  title: 'SEMANGAT NABUNG BUAT BELI!',
                  text: 'Yhaa lain kali beli!.',
                  icon: 'error'
              });
          }
      });
  } else {
      Swal.fire({
          icon: 'error',
          title: 'Form Incomplete',
          text: 'Mohon lengkapi formulir terlebih dahulu.'
      });
  }
});

function resetForm() {
  document.getElementById('mask-order-form').reset();
}

