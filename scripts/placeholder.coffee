$(document).ready ->
	if not Modernizr.input.placeholder
		$("[placeholder]").focus( ->
			input = $(this)
			if input.val() in [input.attr("placeholder")]
				input.val ""
				input.removeClass "placeholder"
		).blur( ->
			input = $(this)
			if input.val() in [''] or input.val() in [input.attr("placeholder")]
				input.addClass "placeholder"
				input.val input.attr "placeholder"
		).blur()

		$("[placeholder]").parents("form").submit ->
			$(this).find("[placeholder]").each ->
				input = $(this)
				if input.val() in [input.attr('placeholder')]
					input.val ""