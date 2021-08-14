(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[832],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5782:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],l={},d={unversionedId:"getting_started/validator",id:"getting_started/validator",isDocsHomePage:!1,title:"Validator Overview",description:"What is a Validator?",source:"@site/docs/getting_started/validator.md",sourceDirName:"getting_started",slug:"/getting_started/validator",permalink:"/docs/getting_started/validator",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/getting_started/intro"},next:{title:"Install",permalink:"/docs/getting_started/install"}},c=[{value:"What is a Validator?",id:"what-is-a-validator",children:[]},{value:"Join the ATOP Mainnet",id:"join-the-atop-mainnet",children:[{value:"Setup of a new Node",id:"setup-of-a-new-node",children:[]},{value:"Genesis &amp; Seeds",id:"genesis--seeds",children:[]},{value:"Run a Full Node",id:"run-a-full-node",children:[]},{value:"Create an account",id:"create-an-account",children:[]},{value:"Get some coins",id:"get-some-coins",children:[]},{value:"Create-validator",id:"create-validator",children:[]},{value:"Edit-validator",id:"edit-validator",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-a-validator"},"What is a Validator?"),(0,r.kt)("p",null,"Validators are responsible for committing new blocks to the blockchain through voting. A validator's stake is slashed if they become unavailable or sign blocks at the same height. Please read about Sentry Node Architecture to protect your node from DDOS attacks and to ensure high-availability."),(0,r.kt)("h2",{id:"join-the-atop-mainnet"},"Join the ATOP Mainnet"),(0,r.kt)("h3",{id:"setup-of-a-new-node"},"Setup of a new Node"),(0,r.kt)("p",null,"First, create two directories for configuration of a new node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ mkdir ~/.atopnode\n$ mkdir ~/.atopcli\n")),(0,r.kt)("p",null,'Next, run a docker exec "/bin/sh" command inside a docker container.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -it -v ~/.atopnode:/home/atop/.atopnode -v ~/.atopcli:/home/atop/.atopcli --name atopconf atopcloud/acetop /bin/sh\n")),(0,r.kt)("p",null,"Finally, initialize the node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Inside a docker container\n$ atopnode init <moniker> --chain-id <chain-id>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"moniker")," : the displayed name of your node over ATOP network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chain-id")," : atopnet")),(0,r.kt)("h3",{id:"genesis--seeds"},"Genesis & Seeds"),(0,r.kt)("h4",{id:"copy-the-genesis-file"},"Copy the Genesis File"),(0,r.kt)("p",null,"Fetch the mainnet's ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file into ",(0,r.kt)("inlineCode",{parentName:"p"},"atopnode"),"'s config directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget --load-cookies ~/cookies.txt \"https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies ~/cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id=1BFv4tR7hZJqeABi1n3o4ECth7-NvRIx8' -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\\1\\n/p')&id=1BFv4tR7hZJqeABi1n3o4ECth7-NvRIx8\" -O genesis.json && rm -rf ~/cookies.txt\n$ mv genesis.json ~/.atopnode/config\n")),(0,r.kt)("h4",{id:"add-seed-nodes"},"Add Seed Nodes"),(0,r.kt)("p",null,"Your node needs to know how to find peers. You'll need to add healthy seed nodes to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.atopnode/config/config.toml"),". So open ~/.atopnode/config/config.toml file and edit seeds of ","[p2p]"," section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'##### peer to peer configuration options #####\n[p2p]\n\n...\n\n# Comma separated list of seed nodes to connect to\nseeds = "8db95441e82c9519fd1971436c652a7c8025c1eb@3.37.63.155:26656"\n')),(0,r.kt)("h3",{id:"run-a-full-node"},"Run a Full Node"),(0,r.kt)("p",null,"Start the full node with this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -it -p 26657:26657 -p 26656:26656 -v ~/.atopnode:/home/atop/.atopnode -v ~/.atopcli:/home/atop/.atopcli --name atopnode atopcloud/acetop atopnode start\n")),(0,r.kt)("p",null,"You need to wait until blocks are fully synced. Check that everything is running smoothly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Inside a docker container\n$ atopcli status\n")),(0,r.kt)("h3",{id:"create-an-account"},"Create an account"),(0,r.kt)("p",null,"Before creating validator, you should have an account for your node and validator."),(0,r.kt)("h4",{id:"create-new-wallet"},"Create new wallet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Inside a docker container\natopcli keys add <name>\n")),(0,r.kt)("p",null,"This command returns wallet address and mnemonic. Write the seed phrase in a safe place!"),(0,r.kt)("h3",{id:"get-some-coins"},"Get some coins"),(0,r.kt)("p",null,"You need coins to be a validator."),(0,r.kt)("h3",{id:"create-validator"},"Create-validator"),(0,r.kt)("p",null,"You can find your validator pubkey by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"atopnode tendermint show-validator\n")),(0,r.kt)("p",null,"You can create a new validator by staking tokens."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Inside a docker container\natopcli tx staking create-validator \\\n  --amount="1000000uatop" \\\n  --pubkey=$(atopnode tendermint show-validator)" \\\n  --moniker="choose a moniker" \\\n  --chain-id=<chain_id> \\\n  --min-self-delegation="1" \\\n  --gas-prices="0.025uatop" \\\n  --from=<key_name>\n')),(0,r.kt)("h3",{id:"edit-validator"},"Edit-validator"),(0,r.kt)("p",null,"You can edit information of the validator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Inside a docker container\natopcli tx staking create-validator \\\n  --amount="1000000uatop" \\\n  --pubkey=$(atopnode tendermint show-validator)" \\\n  --moniker="choose a moniker" \\\n  --chain-id=<chain_id> \\\n  --min-self-delegation="1" \\\n  --gas-prices="0.025uatop" \\\n  --from=<key_name>\n')),(0,r.kt)("p",null,"Flags:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name, shorthand"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--amount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of coins to bond")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--pubkey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Bech32 encoded PubKey of the validator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--moniker"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The validator's name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The network chain ID to connect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--min-self-delegation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The minimum self delegation required on the validator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--gas-prices"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gas prices to determine the transaction fee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name or address of private key with which to sign")))))}p.isMDXComponent=!0}}]);