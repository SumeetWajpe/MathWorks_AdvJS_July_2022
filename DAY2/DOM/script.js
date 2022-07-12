/* <div class="card" style="width: 18rem">
            <img
              src="https://www.pragimtech.com/wp-content/uploads/2019/04/bootstrap.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div> */

function Initialize() {
  var course = {
    id: 1,
    title: "React",
    price: 5000,
    rating: 5,
    likes: 200,
    imageUrl: "https://www.scnsoft.com/blog-pictures/cover-pics/react_js.png",
  };

  CourseCardItem(course);
}

function CourseCardItem(course) {
  let courseCard = document.createElement("div");
  courseCard.className = "card";
  courseCard.style.width = "18rem";

  let courseCardImage = document.createElement("img");
  courseCardImage.src = course.imageUrl;
  courseCardImage.alt = course.title;
  courseCardImage.className = "card-img-top";

  let courseCardBody = document.createElement("div");
  courseCardBody.setAttribute("class", "card-body");

  let courseTitle = document.createElement("h5");
  courseTitle.innerText = course.title;
  courseTitle.className = "card-title";

  let coursePrice = document.createElement("p");
  coursePrice.innerText = course.price;
  coursePrice.className = "card-text";

  let courseLikesBtn = document.createElement("button");
  courseLikesBtn.className = "btn btn-primary";
  //courseLikesBtn.innerText = course.likes;
  courseLikesBtn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> ${course.likes}`;

  courseCardBody.append(courseTitle);
  courseCardBody.append(coursePrice);
  courseCardBody.append(courseLikesBtn);

  courseCard.append(courseCardImage);
  courseCard.append(courseCardBody);

  document.getElementById("courseList").append(courseCard);
}

window.addEventListener("DOMContentLoaded", Initialize);
