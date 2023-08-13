function ipkGenerator() {
    const ipk = [3.5, 2.9, 4.0];
    const randomIPK = Math.floor(Math.random() * ipk.length);
    document.getElementById("ipk_terakhir").value = ipk[randomIPK];
  }
  
  function pindahLaman() {
    window.location.href = "formpendaftaran.html";
  }
  function hasil() {
    window.location.href = "tabelhasil.html";
  }
  
  function submitData() {
    var getNIM = document.getElementById("nim").value;
    var getNama = document.getElementById("name").value;
    var getEmail = document.getElementById("email").value;
    var getHp = document.getElementById("hp").value;
    var getSemester = document.getElementById("semester").value;
    var getIpk = document.getElementById("ipk_terakhir").value;
    var getBeasiswa = document.getElementById("beasiswa").value;
    var getBerkas = document.getElementById("berkas").files[0];
    var getStatus = "Belum Diverifikasi";
  
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (
      document.getElementById("nim").value != "" &&
      document.getElementById("name").value != "" &&
      document.getElementById("email").value != "" &&
      document.getElementById("hp").value != "" &&
      document.getElementById("semester").value != "" &&
      document.getElementById("ipk_terakhir").value != "" &&
      document.getElementById("beasiswa").value != "" &&
      document.getElementById("berkas").value != ""
    ) {
      if (document.getElementById("email").value.match(validRegex)) {
        if (document.getElementById("ipk_terakhir").value < 3) {
          alert("IPK anda kurang dari persyaratan");
        } else {
          if (JSON.stringify(getEmail) === localStorage.getItem("email") || JSON.stringify(getNama) === localStorage.getItem("nama")) {
            alert("Anda sudah mendaftar");
            return; // Stop processing the form submission
          } else {
            data = JSON.parse(localStorage.getItem("dataHasil")) || [];
            data.push({
              dataNIM: getNIM,
              dataNama: getNama,
              dataEmail: getEmail,
              dataHp: getHp,
              dataSemester: getSemester,
              dataIpk: getIpk,
              dataBeasiswa: getBeasiswa,
              dataBerkas: getBerkas.name,
              dataStatus: getStatus,
            });
            localStorage.setItem("dataHasil", JSON.stringify(data));
  
            window.location.href = "tabelhasil.html";
          }
          localStorage.setItem("nim", JSON.stringify(getNIM));
          localStorage.setItem("nama", JSON.stringify(getNama));
          localStorage.setItem("email", JSON.stringify(getEmail));
          localStorage.setItem("hp", JSON.stringify(getHp));
          localStorage.setItem("semester", JSON.stringify(getSemester));
          localStorage.setItem("ipk_terakhir", JSON.stringify(getIpk));
          localStorage.setItem("beasiswa", JSON.stringify(getBeasiswa));
          localStorage.setItem("berkas", JSON.stringify(getBerkas.name));
          localStorage.setItem("status", JSON.stringify(getStatus));
        }
      } else {
        alert("Isi Email dengan benar");
      }
    } else {
      alert("Silahkan isi semua data");
    }
  }