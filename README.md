![image](https://github.com/feedox/husher/assets/246724/371de603-5cfc-453f-97f7-8ca0fa0454c2)

<!-- # 🤫 Husher -->

A library to analyze text that contains special unicode characters that are unnoticeable by naked eye but are interpretable by LLMs.

## Features:

1. ⭐️ hush - encode input string into hidden text with zero-width characters
2. ⭐️ dehush - reverse the process and discover the hidden text
3. ⭐️ sanitize - sanitize the text from hidden text characters
4. Support dehush of flag emojis, utf-8 and other multilingual charsets, while the hidden characters are type of flag emoji with custom payload.

example input: "[clear text, flag: 🇨🇦, utf-8: א, hushed payload: 󠁳󠁨󠁨󠁨󠀡](https://t.co/7n5CfnVtNW)" ->  
example output: "clear text, flag: 🇨🇦, utf-8: א, hushed payload: **shhh!**"
<!-- ![image](https://github.com/feedox/husher/assets/246724/74c402fd-0ed7-433f-9eef-c9b5d40f3e03)  -->

## Demo:
![Husher-demo](https://github.com/Livshitz/libx.js/assets/246724/26613780-9592-46cc-b8ee-beb64dc54b21)


## Usage:

#### via NPX:  
encode:
`npx husher hush="hello world"`
  
`npx husher sanitize="<encoded string>"`

#### via npm/yarn:  
`yarn install husher`
`npm install husher`

#### interactive demonstration tool:  
You can also play with the [online tool](https://lab.feedox.com/wild-llama/husher) which performs hush/dehush operations on client-side.


## Credits:

The credit for uncovering the impacts of this method goes to 
[@goodside](https://twitter.com/goodside/status/1746685366952735034). Make sure to follow up.
<img width="585" alt="image" src="https://github.com/Livshitz/libx.js/assets/246724/8664fde0-98ba-4b7b-a891-e382bf983644">


---

Scaffolded with [🏗 TS-scaffold](https://github.com/Livshitz/ts-scaffold.git)
