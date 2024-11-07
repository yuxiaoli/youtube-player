function main() {
	const queryString = window.location.search;
	console.log(queryString);
	const urlParams = new URLSearchParams(queryString);
	const url = urlParams.get("url");
	urlParams.delete("url");
	const params = urlParams.toString();
	console.log(params);
	let src = `${url.replace("/watch?v=", "/embed/")}`;
	if (params) {
		src += `?${params}`;
	}
	console.log(src);
	const iframe = document.getElementById("bg-video");
	iframe.src = src;
	// const iframe = `<iframe id=bg-video src="${src}" frameBorder=0 allowFullScreen allow=autoplay /></iframe>`;
	// document.body.innerHTML += iframe;
}

main();