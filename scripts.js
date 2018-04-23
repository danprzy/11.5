// funkcja tworząca nowe przyciski
$(function () {
	function Button(text) {
		this.text = text || 'Hello'; // jeśli obiektu bez podania argumentu, to ustawiam domyślną wartość
	}

	Button.prototype = {
		create: function() {
			var self = this;
			this.$element = $('<button>');
			this.$element.text(this.text);
			this.$element.click(function() {
				alert(self.text);
			});
			$('body').append(this.$element);
		}
	}
	var btn1 = new Button('Hello!');
	btn1.create();
});