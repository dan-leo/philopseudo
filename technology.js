class Technology
{
private:

	visible_tech = functional;
	!visible_tech = !functional;

	value_neutral = "presupposing the acceptance of any particular values"

public:

	Technology(){

	}	

	manipulation(human){
		return _technology;
	}

	hardware(){
		devices = {
			tools,
			machines,
			instruments,
			structures
		}

		_technology = Technology(devices);

		_reflections = {
			"Devices": _technology.manipulate(humans),
			"Humans give tools purpose",
			"Technology is": !value_neutral
		}

		_problems = {
			"earliest machine was the organization of people",
			"tech hardware does not always function",
			"sometimes it is extensions of who we are"
		}

		return {
			_technology, _reflections, _problems
		}
	}

	rules(){
		_reflections = {
			"means-end relationships",
			"not hardware but pattern of rules related to problem-solving?",
			"tech as software, not hardware?",
		}

		_examples = {
			"speech recognition",
			"traffic control",
			"software engineering"
		}

		_problems = {
			"AI",
			"tech uses reliable physical aspect of nature"
		}

		return {
			_reflections, _examples, _problems
		}
	}

	applied_science(){
		_reflections = {
			"application of science in service of the needs of humanity",
			"some aspects of applied science is technology",
			"tech seems value_neutral, which is misleading",
			"historically, most of the rise in tech did not come from the knowledge of science"
		}

		_contradictions = {
			"Thomas Edison did not know the emag theory of Maxwell",
			"Chemical discoveries = accidents" : [
				"pace-maker",
				"post-it",
				"slinky"
			]
		}
	}


};