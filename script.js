let add = document.querySelector(".add");
let modal = document.querySelector(".modal-window");
let closeBtn = document.querySelector(".close");
add.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

//
let list = document.querySelector(".main");
let image = document.querySelector(".image");
let quoteInp = document.querySelector(".quoteInp");
let likeInp = document.querySelector(".likeInp");
let comment = document.querySelector(".comment");
let share = document.querySelector(".share");
let create = document.querySelector(".create");
let date = new Date();
readPost();

create.addEventListener("click", () => {
  let obj = {
    image: image.value,
    quote: quoteInp.value,
    like: likeInp.value,
    comment: comment.value,
    share: share.value,
    id: Date.now(),
  };
  let data = JSON.parse(localStorage.getItem("post")) || [];
  data.push(obj);
  localStorage.setItem("post", JSON.stringify(data));
  readPost();

  image.value = "";
  quoteInp.value = "";
  likeInp.value = "";
  comment.value = "";
  share.value = "";
  modal.style.display = "none";
});

function readPost() {
  list.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("post")) || [];
  data.forEach((el) => {
    //create
    let post = document.createElement("div");
    post.classList.add("post");
    let postHead = document.createElement("div");
    postHead.classList.add("post-head");
    let name = document.createElement("div");
    name.classList.add("name");
    let ava = document.createElement("div");
    ava.classList.add("ava");
    let avaImg = document.createElement("img");
    avaImg.classList.add("avatarka");
    avaImg.src =
      "https://i.natgeofe.com/k/093c14b4-978e-41f7-b1aa-3aff5d1c608a/gray-wolf-closeup_2x3.jpg";
    let h5 = document.createElement("h5");
    h5.innerText = "esenturov.17";
    let icons = document.createElement("div");
    icons.classList.add("icons");
    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = ' <ion-icon name="trash-outline"></ion-icon>';
    let editBtn = document.createElement("span");
    editBtn.innerHTML = '<ion-icon name="pencil-outline"></ion-icon> ';
    let picture = document.createElement("img");
    picture.classList.add("picture");
    picture.src = el.image;
    let postTitle = document.createElement("div");
    postTitle.classList.add("post-title");
    let postInfo = document.createElement("div");
    postInfo.classList.add("post-info");
    let likeComment = document.createElement("div");
    likeComment.classList.add("like-comment");
    let like1 = document.createElement("div");
    like1.classList.add("like");
    let like2 = document.createElement("div");
    like2.classList.add("like");
    let like3 = document.createElement("div");
    like3.classList.add("like");
    let heartIcon = document.createElement("span");
    heartIcon.innerHTML = ' <ion-icon name="heart-outline"></ion-icon>';
    let commentIcon = document.createElement("span");
    commentIcon.innerHTML = ' <ion-icon name="chatbubble-outline"></ion-icon>';
    let shareIcon = document.createElement("span");
    shareIcon.innerHTML = '<ion-icon name="paper-plane-outline"></ion-icon>';
    let heart = document.createElement("p");
    heart.innerText = el.like;
    let comment = document.createElement("p");
    comment.innerText = el.comment;
    let share = document.createElement("p");
    share.innerText = el.share;

    let quote = document.createElement("div");
    quote.classList.add("quote");
    let nickName = document.createElement("h5");
    nickName.innerText = "esenturov.17";
    let descr = document.createElement("p");
    descr.innerText = el.quote;
    let bookmarkIcon = document.createElement("span");
    bookmarkIcon.innerHTML = '<ion-icon name="bookmark-outline"></ion-icon>';

    // append
    post.append(postHead, picture, postTitle);
    postHead.append(name, icons);
    name.append(ava);
    ava.append(avaImg, h5);
    icons.append(deleteBtn, editBtn);
    postTitle.append(postInfo, bookmarkIcon);
    postInfo.append(likeComment, quote);
    likeComment.append(like1, like2, like3);
    like1.append(heartIcon, heart);
    like2.append(commentIcon, comment);
    like3.append(shareIcon, share);
    quote.append(nickName, descr);
    list.append(post);
  });
}
