const attribute_setting =  document.querySelectorAll("button");

attribute_setting.forEach(attribute => {
	const data_value = attribute.firstChild.data || attribute.firstChild.textContent;
	attribute.setAttribute("data-name", data_value)
	if (attribute.classList.contains("btn-icon") && attribute.getAttribute('data-icon')) {
		attribute.innerHTML = `<i class="${attribute.getAttribute('data-icon')}"></i>` +  attribute.innerHTML
	}
})


const tooltip_container = document.querySelectorAll(".tooltip");

tooltip_container.forEach(tooltip => {
	tooltip.innerHTML += `<p class="tooltip-container">${tooltip.dataset.tooltip}</p>`
	let flag = "false";
	try {
		flag = tooltip.getAttribute('tooltip-animation')
	} catch (error) {
		return
	}
	if(flag === "true" && tooltip.classList.contains('tooltip')){
		tooltip.querySelector(".tooltip-container").classList.add('tooltip_animation')
	}
})
