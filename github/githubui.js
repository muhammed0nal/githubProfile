class UI {
  getProfileUi(
    htmlUrl,
    avatarUrl,
    githubName,
    bio,
    followers,
    following,
    company,
    location,
    mail
  ) {
    let array = [
      htmlUrl,
      avatarUrl,
      githubName,
      bio,
      followers,
      following,
      company,
      location,
      mail,
    ];
    array.forEach((element, index) => {
      if (element == null) {
        array[index] = "Kullanıcı bu kısmı boş bırakmış..";
      }
    });

    profileId.innerHTML = `<div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="${array[0]}" target = "_blank">
                         <img class="img-fluid mb-2" src="${array[1]}"> </a>
                         <hr>
                         <div id="fullName"><strong> ${array[2]}</strong></div>
                         <hr>
                         <div id="bio">${array[3]}</div>
                        </div>
                      <div class="col-md-8">
                      <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${array[4]}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${array[5]}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light"></span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="company.png" width="30px"> <span id="company">${array[6]}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="location.png" width="30px"> <span id = "location">${array[7]}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="mail.png" width="30px"> <span id="company">${array[8]}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>`;
  }
  getRepoUi(data_repo) {
    repoDiv.innerHTML = "";
    data_repo.forEach((element, index) => {
      repoDiv.innerHTML += `<div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        <span></span> 
                        <a href="${element.html_url}" target = "_blank" id = "repoName">${element.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${element.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${element.forks_count}</span>
                            </button>
                    
                        </div>
                </div>
                </div>`;
    });
  }
  notGetProfileUi(username_) {
    profileId.innerHTML = `<div class="card card-body mb-3">
                  ${username_} adlı kullanıcı bulunamadı.
                </div>`;
  }
  notGetRepoUi() {
    repoDiv.innerHTML = "";
  }
  getLoading() {
    profileId.innerHTML = `<div class="card card-body mb-3">
                  <img src="Spinner-0.7s-197px.svg">
                </div>`;
  }
  // getSearchHistory(data) {
  //   lastSearchs.innerHTML = "";
  //   searchHistory.forEach((element, index) => {
  //     if (element == data) {
  //       searchHistory.splice(index, 1);
  //     }
  //   });
  //   searchHistory.push(data);
  //   searchHistory.forEach((element) => {
  //     lastSearchs.innerHTML += `<li class="list-group-item">${element}</li>`;
  //   });
  // }
  lastSearchsClear() {
    searchHistory = [];
    storageArr = [];
    lastSearchs.innerHTML = "";
  }
  reposStorageUi() {
    lastSearchs.innerHTML = "";
    storageArr.forEach((element) => {
      lastSearchs.innerHTML += `<li  class="list-group-item"><a target="blank" href="https://github.com/${element}">${element}</a></li>`;
    });
  }
}
