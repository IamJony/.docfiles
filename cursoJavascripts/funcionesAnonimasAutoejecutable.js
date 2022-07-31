// funciones anonimas autoejecutables

(function (w,d,c) {
	console.log("this is function autoejecutable");
	console.log(document);
	c.log("this is console log");
})(window,document,console);

// diferentes formas de escribir una funcion anonimas

!function () {
	console.log("funcion anonima version facebook")
}();

+function () {
	console.log("funcion anonima version Unaria")	
}();

((function () {
	console.log("funciones anonima version Crockford")
})());
