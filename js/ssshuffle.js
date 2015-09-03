// scripty script for wwwiggles
function ssshuffle() {
	var imgs = [
		"images/floating_shade.gif",
		"images/dino_dance_gif.gif",
		"images/palm_tree_dance_gif.gif",
		"images/jimi_nose_gif.gif"
	];
	var ssshuffleimg = imgs[Math.floor(Math.random() * imgs.length)];
	return(ssshuffleimg);
};

$('#wwwiggle-img').load().attr("src", ssshuffle());
	