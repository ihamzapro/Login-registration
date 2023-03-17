const wrapper = document.querySelector(".wrapper");
const registrationLink = document.querySelector(".registor-link");

registrationLink.onclick = () => {
  wrapper.classList.add("active");
};
