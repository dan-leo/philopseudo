class Consequences
{

private:

public:

	Consequences(){
		
	}

	combined_consequences(){
		return {
			Science + Technology += "Mechanization and Urbanization"
			Technology + "environment" += "people forced to adapt"
		}
	}

	scientific_consequences(){
		return {

		}
	}

	technological_consequences(){
		while (tech_progress){
			tech_progress += tech_progress;
		}
		return {
			tech_progress
		}
	}

	knowledge_consequences(){
		return {
			Knowledge.negative_responses()
		}
	}

}