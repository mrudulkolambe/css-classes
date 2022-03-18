const attribute_setting =  document.querySelectorAll("button");

attribute_setting.forEach(attribute => {
	attribute.setAttribute("data-name", attribute.firstChild.data || attribute.firstChild.textContent)
})


const tooltip_container = document.querySelectorAll(".tooltip-container");

tooltip_container.forEach(tooltip => {
	tooltip.innerHTML += `<p class="tooltip">${tooltip.dataset.tooltip}</p>`
})