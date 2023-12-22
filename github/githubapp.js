const form = document.getElementById("github-form");
const formInput = document.getElementById("githubname");
const profileId = document.getElementById("profile");
const repoDiv = document.getElementById("repos");
const lastSearchs = document.getElementById("last-users");
const lastSearchsClear = document.getElementById("clear-last-users");
const profile = new Profile();
const ui = new UI();
const storage = new Storage();
let storageArr = [];
if (localStorage.getItem("name") !== null) {
  storageArr = JSON.parse(localStorage.getItem("name"));
  ui.reposStorageUi();
}
let searchHistory = [];

form.addEventListener("submit", (e) => {
  if (formInput.value == "") {
    alert("Boş kullanıcı adı girilemez..");
  } else {
    ui.getLoading();
    profile
      .getProfile(formInput.value.trim())
      .then((data_) => {
        if (data_.user.message == "Not Found") {
          ui.notGetProfileUi(formInput.value.trim());
          ui.notGetRepoUi();
        } else {
          // ui.getSearchHistory(data_.user.name);

          ui.getProfileUi(
            data_.user.html_url,
            data_.user.avatar_url,
            data_.user.name,
            data_.user.bio,
            data_.user.followers,
            data_.user.following,
            data_.user.company,
            data_.user.location,
            data_.user.email
          );
          ui.getRepoUi(data_.repo);
          let name_ = data_.user.login;
          if (storageArr.indexOf(name_) == -1) {
            storageArr.push(`${name_}`);
          }
          ui.reposStorageUi();
          storage.setStorage(storageArr);
        }
      })
      .catch((err) => console.log(err));
  }

  e.preventDefault();
});
lastSearchsClear.addEventListener("click", (e) => {
  ui.lastSearchsClear();
  storage.deleteStorage();
  e.preventDefault();
});
