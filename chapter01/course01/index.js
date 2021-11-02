
function greetWorld() {
return 'Hey, world!'
}

function greet(name) {
  return `Hey, ${name}!`
}

function capitilizedGreet(name) {
  const firstLetter = name.charAt(0)
  let res = firstLetter.toUpperCase()
  const otherletter = name.substring(1)
   res += otherletter.toLowerCase()
   return greet(res)
}

module.exports = {
  greetWorld,
  greet,
  capitilizedGreet
}
