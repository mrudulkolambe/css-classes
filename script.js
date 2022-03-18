const attribute_setting = document.querySelectorAll("button");

attribute_setting.forEach((attribute) => {
  const data_value =
    attribute.firstChild.data || attribute.firstChild.textContent;
  attribute.setAttribute("data-name", data_value);
});

const icon_setting = document.querySelectorAll(".btn-icon");
icon_setting.forEach((icon_setter) => {
  if (
    icon_setter.classList.contains("btn-icon") &&
    icon_setter.getAttribute("data-icon")
  ) {
    icon_setter.innerHTML =
      `<i class="${icon_setter.getAttribute("data-icon")}"></i>` +
      icon_setter.innerHTML;
  }
});

const tooltip_container = document.querySelectorAll(".tooltip");

tooltip_container.forEach((tooltip) => {
  tooltip.innerHTML += `<p class="tooltip-container">${tooltip.dataset.tooltip}</p>`;
  let flag = "false";
  try {
    flag = tooltip.getAttribute("tooltip-animation");
  } catch (error) {
    return;
  }
  if (flag === "true" && tooltip.classList.contains("tooltip")) {
    tooltip
      .querySelector(".tooltip-container")
      .classList.add("tooltip_animation");
  }
});
