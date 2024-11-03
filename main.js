// Ambil elemen-elemen input dan kontainer
const setProfile = document.getElementById("set-profile");
const nama = document.getElementById("nama");
const jobTitle = document.getElementById("job-title");
const namaInput = document.getElementById("nama-pengguna");
const jobInput = document.getElementById("job-pengguna");
const sectionProfile = document.getElementById("set-profile");
const sectionTodo = document.getElementById("section-todo");

// Fungsi menghapus halaman set profile dan menggantinya dengan Todolist
function submitProfile() {
  nama.textContent = namaInput.value;
  jobTitle.textContent = jobInput.value;
  if (sectionProfile.classList.contains("d-flex")) {
    sectionProfile.classList.remove("d-flex");
    sectionProfile.classList.add("d-none");
  } else {
    sectionProfile.classList.add("d-none");
    sectionProfile.classList.remove("d-flex");
  }

  if (sectionTodo.classList.contains("d-none")) {
    sectionTodo.classList.remove("d-none");
    sectionTodo.classList.add("d-flex");
  } else {
    sectionTodo.classList.add("d-flex");
    sectionTodo.classList.remove("d-none");
  }
}

// Ambil elemen-elemen input dan kontainer
const inputTanggal = document.getElementById("tanggal-pengguna");
const inputPriority = document.getElementById("prioritas-pengguna");
const inputDeskripsi = document.getElementById("deskripsi-pengguna");
const todoContainer = document.getElementById("text-todo");

// Fungsi untuk submit Todo baru
function submitTodo() {
  // Cegah form melakukan reload
  event.preventDefault();

  // Membuat elemen todo baru
  const todoItem = document.createElement("div");
  todoItem.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-center",
    "align-items-center",
    "w-100",
    "bg-dark",
    "text-white",
    "py-2",
    "px-5",
    "rounded-2",
    "mt-2"
  );

  // Mengisi elemen todo baru dengan konten dari input
  todoItem.innerHTML = `
        <div class="flex-row justify-content-between w-100">
            <h5 class="fw-bold text-white todo-text">${inputDeskripsi.value}</h5>
            <div class="d-flex gap-2">
                <p>${inputTanggal.value}</p>
                <span>-</span>
                <p class="fw-bold">${inputPriority.value}</p>
            </div>
        </div>
        <div class="d-flex gap-2">
            <input type="checkbox" class="form-check todo-checkbox" style="width: 18px;" onclick="markAsCompleted(this)">
            <button class="btn btn-danger d-flex justify-content-center align-items-center fw-bold" style="width: 100px; height: 35px;" onclick="deleteTodoItem(this)">Delete</button>
        </div>
    `;

  // Tambahkan todo baru ke dalam container
  todoContainer.appendChild(todoItem);

  // Bersihkan nilai input setelah submit
  inputTanggal.value = "";
  inputPriority.value = "Low Priority";
  inputDeskripsi.value = "";
}

// Fungsi untuk menghapus todo item
function deleteTodoItem(button) {
  const todoItem = button.parentElement.parentElement;
  todoContainer.removeChild(todoItem);
}

// Fungsi untuk menandai todo sebagai selesai
function markAsCompleted(checkbox) {
  const todoItem = checkbox.parentElement.parentElement;
  if (checkbox.checked) {
    todoItem.classList.add("completed"); // Tambahkan kelas "completed" saat checkbox dicentang
  } else {
    todoItem.classList.remove("completed"); // Hapus kelas "completed" jika tidak dicentang
  }
}
