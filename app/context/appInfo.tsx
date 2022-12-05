import { createContext } from "react"

interface ContextType {
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


export const initialState={
    userAdress:"",
    userBalance:"",
    QuizContract:"0x437eF217203452317C3C955Cf282b1eE5F6aaF72",
    surveyQuestions:{
        "title":"Help us make the crypto world better",
       "image":"https://48tools.com/wp-content/uploads/2015/09/shortlink.png",
       "questions":[
          {
             "text":"¿Do you think Elon Musk is good for the crypto world?",
             "image":"https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
             "lifetimeSeconds":5,
             "options":[
                {
                   "text":"Yes"
                },
                {
                   "text":"Maybe"
                },
                {
                   "text":"Not at all"
                }
             ]
          },
          {
             "text":"Question2",
             "image":"https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
             "lifetimeSeconds":5,
             "options":[
                {
                   "text":"Opt1quest2"
                },
                {
                   "text":"Opt2"
                },
                {
                   "text":"Opt"
                }
             ]
          },
          {
            "text":"Pregunta 3",
            "image":"https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
            "lifetimeSeconds":5,
            "options":[
                {
                   "text":"Opt1"
                },
                {
                   "text":"Opt2"
                },
                {
                   "text":"Opt"
                }
             ]
         }
       ]
    },
    ERC20_ABI:[
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        }
    ],
    surveyAnswers:[]
}
export const AppContext = createContext<ContextType>({} as ContextType);

export const appReducer=(state:any=initialState, action:any)=>{
    switch(action.type){
        case "UserMetaMask" : {
            return{
                ...state,
                userAdress:action.payload
            }
        }
        case "UserBalance" : {
            return{
                ...state,
                userBalance:action.payload
            }
        }
        default:return state
    }
}