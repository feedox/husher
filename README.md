# 🤫 Husher

A library to encode text into special unicode characters that are unnoticeable in the UI for are interpretable by LLMs.

<video src='https://github.com/Livshitz/libx.js/assets/246724/f6c22f1d-c60e-435e-8f98-8c893b4243c4'/>

## Features:

1. ⭐️ hush - encode input string into hidden text with zero-width characters
2. ⭐️ dehush - reverse the process and discover the hidden text
3. ⭐️ sanitize - sanitize the text from hidden text characters

## Usage:

#### via NPX:  
encode:
`npx husher hush="hello world"`
  
`npx husher sanitize="<encoded string>"`

#### via npm/yarn:  
`yarn install husher`
`npm install husher`

#### online tool:  
You can also play with the [online tool](https://lab.feedox.com/wild-llma/husher).


## Credits:

The credit for discovering the effects of this technique was discovered by 
[@goodside](https://twitter.com/goodside/status/1746685366952735034)
<img width="585" alt="image" src="https://github.com/Livshitz/libx.js/assets/246724/8664fde0-98ba-4b7b-a891-e382bf983644">


---

Scaffolded with [🏗 TS-scaffold](https://github.com/Livshitz/ts-scaffold.git)
