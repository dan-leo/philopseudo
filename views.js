class Views implements Technology, Knowledge
{
private:

public:

	Views();

	get_technology_views(){
		return {
			hardware(),
			rules(),	
			applied_science(),
			system()
		}
	}

	get_knowledge_views(){
		return {
			Knowledge.socrates(),
			Kownledge.bacon()
		}
	}
};