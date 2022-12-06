export interface Answers{
    question:string
    answer:string
}

export interface ContextType{
    state: {
        userAdress: string;
        userBalance: string;
        QuizContract:string;
        surveyQuestions:{
            title:string,
            image:string,
            questions:Array<{text:string, image:string,lifetimeSeconds:number, options:Array<{text:string}>}>};
        ERC20_ABI:[{
            constant:boolean,
            inputs:[],
            name:string,
            outputs:[
                {name:string,
                type:string}],
            payable:boolean,
            type:string}];
    };
    dispatch: React.Dispatch<{ type: string; value: unknown }>;
  }